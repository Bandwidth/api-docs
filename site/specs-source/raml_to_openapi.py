from collections import OrderedDict
import json
import re
from lxml import etree
from ramlfications import parse


def filter_paths(data):
    paths_to_delete = []
    for path in data['paths']:
        methods_to_delete = []
        for method in data['paths'][path]:
            print(f"{method} {path}")
            if 'tags' not in data['paths'][path][method]:
                print(f"{method} {path} has not been tagged an will not appear in the output")
                print("Deleting", path, method)
                methods_to_delete.append(method)
            elif "internal" in data['paths'][path][method]['tags']:
                print("Deleting", path, method)
                methods_to_delete.append(method)

            data['paths'][path][method]['operationId'] = f"{method.upper()} {path}"

        if len(methods_to_delete) == len(data['paths'][path]):
            paths_to_delete.append(path)
        for method in methods_to_delete:
            del data['paths'][path][method]
    for path in paths_to_delete:
        del data['paths'][path]


def pretty_print_xml(xml):
    if xml is None or xml == 'None' or xml == 'None\n':
        return None
    try:
        x = etree.XML(bytes(bytearray(xml, encoding='utf-8')))
        pretty_xml = etree.tostring(x, pretty_print=True).decode()
        with_line_breaks = re.sub('>([ ]*)<', '>\n\\1<', pretty_xml)
        return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" + with_line_breaks
    except etree.XMLSyntaxError as e:
        print("Failed to parse XML!", e)
        print(xml)
        return xml


def fix_xml_examples(data):
    for path in data['paths']:
        for method in data['paths'][path]:
            print(f"{method} {path}")
            if 'responses' in data['paths'][path][method]:
                for responseCode in data['paths'][path][method]['responses']:
                    response = data['paths'][path][method]['responses'][responseCode]
                    if 'content' in response:
                        for contentType in response['content']:
                            if 'examples' in response['content'][contentType]:
                                print(f"{method} {path} {responseCode} has {len(response['content'][contentType]['examples'])} examples")
                                for exampleName in response['content'][contentType]['examples']:
                                    example = response['content'][contentType]['examples'][exampleName]
                                    if 'xml version' in example['value']:
                                        print(exampleName)
                                        print("old: ", example['value'])
                                        example['value'] = pretty_print_xml(example['value'])
                                        print("new: ", example['value'])


def tag_endpoints(data):
    for path in data['paths']:
        for method in data['paths'][path]:
            print(f"{method} {path}")
            segments = path.split('/')
            data['paths'][path][method]['tags'] = ["/"+segments[1]]


# def create_endpoint_to_domain_map():
#     with open('endpointToDomain.txt', 'r') as endpointFile:
#         endpoint_reader = csv.reader(endpointFile, delimiter='\t')
#         endpoint_map = {}
#         for endpoint in endpoint_reader:
#             path = endpoint[0].lower()
#             if path.endswith("/"):
#                 path = path[0:len(path)-1]
#             endpoint_map[path] = endpoint[1]
#         print(endpoint_map)
#         return endpoint_map


def order_paths(data):
    paths = sorted(list(data.keys()), key=str.casefold)
    # print(paths)
    sorted_paths = OrderedDict()
    for path in paths:
        sorted_paths[path] = data[path]
    return sorted_paths


def get_open_api_spec():
    # endpoint_to_domain_map = create_endpoint_to_domain_map()
        with open('openapi.json', 'r') as r:
            data = json.load(r)
            filter_paths(data)
            fix_xml_examples(data)
            tag_endpoints(data)
            ordered_paths = order_paths(data['paths'])
            data['paths'] = ordered_paths
            return data


def get_raml_spec():
    raml_file = "/Users/mmeyers/code/iris/Iris/apidocs/target/generated-resources/external/raml/iris.min.raml"
    return parse(raml_file)


def analyze_endpoint_description_usage(api):
    endpoint_map = {}
    for r in api.resources:
        if r.path not in endpoint_map:
            endpoint_map[r.path] = {
                "description": r.raw['description'] if 'description' in r.raw else "",
                "methods": []
            }
        endpoint_map[r.path]['methods'].append(r.method)

    used_more_than_1_method_long = 0
    used_more_than_1_method_short = 0
    used_only_one_method = 0
    empty = 0
    for e in endpoint_map:
        if len(endpoint_map[e]['description']) > 100 and len(endpoint_map[e]['methods']) > 1:
            print(e + ": " + str(len(endpoint_map[e]['description'])))
            # print(endpoint_map[e]['description'])
            used_more_than_1_method_long += 1
        elif len(endpoint_map[e]['description']) > 0 and len(endpoint_map[e]['methods']) > 1:
            # print(endpoint_map[e]['description'])
            used_more_than_1_method_short += 1
        elif endpoint_map[e]['description'] != "":
            used_only_one_method += 1
        else:
            empty += 1

    print("used_more_than_1_method_long " + str(used_more_than_1_method_long))
    print("used_more_than_1_method_short " + str(used_more_than_1_method_short))
    print("used_only_one_method " + str(used_only_one_method))
    print("empty " + str(empty))


def compare_endpoints_between(open_api, raml_api):
    open_api_set = set()
    open_api_map = {}
    for path in open_api['paths']:
        for method in open_api['paths'][path]:
            variables_removed = re.sub("{[^}]+}", "{}", path.lower())
            open_api_map[variables_removed] = path
            open_api_set.add(f"{variables_removed} {method}")

    raml_set = set()
    raml_map = {}
    for resource in raml_api.resources:
        variables_removed = re.sub("{[^}]+}", "{}", resource.path.lower())
        raml_map[variables_removed] = resource.path
        raml_set.add(f"{variables_removed} {resource.method}")

    endpoints_in_both = raml_set.intersection(open_api_set)
    endpoints_in_raml = raml_set.difference(open_api_set)
    endpoints_in_openapi = open_api_set.difference(raml_set)
    print("---------Endpoints in BOTH------------")
    for e in endpoints_in_both:
        print(e)
    print("---------Endpoints only in RAML------------")
    for e in endpoints_in_raml:
        print(e)
    print("---------Endpoints only in OpenAPI------------")
    for e in endpoints_in_openapi:
        print(e)
    return raml_map, endpoints_in_raml, open_api_map, endpoints_in_openapi


def serialize_field(param_type, value):
    if value is None:
        return None
    elif param_type in ("integer", "number"):
        return value
    elif param_type in "boolean":
        return value
    else:
        return str(value)


def get_param_schema(param):
    if param.repeat:
        return {
            "type": "array",
            "items": {
                "type": param.type
            }
        }
    else:
        return {
            "type": param.type,
            "default": serialize_field(param.type, param.default)
        }


def raml_to_openapi_parameter(param, param_location):
    print(param)

    return {
        "name": param.name,
        "description": param.description.html if hasattr(param, 'description') and param.description is not None else "",
        "in": param_location,
        "required": param.required,
        "schema": get_param_schema(param),
        "example": serialize_field(param.type, param.example)
    }


def convert_responses(resource):
    responses = {}
    for response in resource.responses:
        r = {
            "description": response.description.html if response.description is not None else "",
        }
        if hasattr(response, 'body') and response.body is not None:
            response_content = {}
            for mime_type in response.body:
                examples = {}
                for name, xml in mime_type.raw.items():
                    examples[name] = {
                        "description": name,
                        "value": pretty_print_xml(xml)
                    }
                    #todo: add <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                    #todo: split multiple examples into multiple objects, fix XML syntax errors
                response_content[mime_type.mime_type] = {
                    "examples": examples
                }
            r["content"] = response_content
        responses[response.code] = r
    return responses


def add_raml_to_openapi(raml_map, raml_api, open_api, endpoints):
    for e in endpoints:
        (endpoint, method) = e.split(' ')
        for resource in raml_api.resources:
            path = raml_map[endpoint]
            if path == resource.path and method == resource.method:
                print(f"parsing params for {path} {method}")
                query_params = [raml_to_openapi_parameter(x, "query") for x in resource.query_params] if hasattr(resource, 'query_params') and resource.query_params is not None else []
                uri_params = [raml_to_openapi_parameter(x, "path") for x in resource.uri_params] if hasattr(resource, 'uri_params') and resource.uri_params is not None else []
                params = uri_params + query_params
                segments = path.split('/')
                method_spec = {
                    "tags": ["/"+segments[1]],
                    "description": resource.description.html,
                    "operationId": f"{method.upper()} {path}",
                    "parameters": params,
                    "responses": convert_responses(resource)
                }
                if path not in open_api['paths']:
                    open_api['paths'][path] = {}

                open_api['paths'][path][method] = method_spec
                break


def main():
    open_api = get_open_api_spec()
    raml_api = get_raml_spec()
    # analyze_endpoint_description_usage(api)
    raml_map, endpoints_in_raml, open_api_map, endpoints_in_openapi = compare_endpoints_between(open_api, raml_api)
    add_raml_to_openapi(raml_map, raml_api, open_api, endpoints_in_raml)

    with open('numbers.json', 'w') as w:
        w.write(json.dumps(open_api, indent=2, default=str))


if __name__ == '__main__':
    main()
