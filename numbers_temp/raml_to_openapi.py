from collections import OrderedDict
import json
import re
from lxml import etree
from ramlfications import parse


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


def get_open_api_spec():
    with open('numbers_template.json', 'r') as r:
        return json.load(r)


def get_raml_spec():
    raml_file = "iris.min.raml"
    return parse(raml_file)


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


def convert_raml_to_openapi(raml_api, open_api):
    for resource in raml_api.resources:
        if resource.method is not None:
            path = resource.path
            method = resource.method

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


def main():
    open_api = get_open_api_spec()
    raml_api = get_raml_spec()

    convert_raml_to_openapi(raml_api, open_api)

    with open('../site/specs/numbers.json', 'w') as w:
        w.write(json.dumps(open_api, indent=2, default=str))


if __name__ == '__main__':
    main()
