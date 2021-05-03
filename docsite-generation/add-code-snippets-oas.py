"""
add-code-snippets-to-oas.py

This script runs on docsite generation to modify the OpenAPI specs to support Redoc's code snippet extension.

The code sample files are stored in the following format

    codeSnippets/<SpecName>/<OperationId>/sample.<extension>

Pseudo code for the script

for each OpenAPI spec:
    read into a JSON object
    for each operationId:
        add the x-code-samples field and default it to []
        build the file path
        for each file:
            add the object {
                "lang": "<switch on lang based on file extension>",
                "source": "<file contents>"
            }
    save the OpenAPI spec
"""

import os
import json

#Converts the file extension to the proper Redoc `lang` tag
EXTENSION_TO_LANG = {
    "cs": "C#",
    "java": "Java",
    "php": "PHP",
    "py": "Python",
    "rb": "Ruby",
    "ts": "TypeScript",
    "js": "JavaScript"
}

#Base template string for the files to read
SAMPLE_FILES_TEMPLATE_STRING = "codeSnippets/{spec_name}/{operation_id}/"

spec_directory = 'test-specs/'

for spec in os.listdir(spec_directory):
    spec_json = None
    with open(spec_directory + spec) as f:
        spec_json = json.loads(f.read())

    spec_name = spec_json["info"]["title"]

    #This results in every URL defined in the OpenAPI spec
    for path in spec_json["paths"].keys(): 
        path_object = spec_json["paths"][path]

        #This results in every HTTP method defined on the URL
        for operation in path_object.keys(): 
            operation_object = path_object[operation]

            #operation_id is what we are matching code samples on
            operation_id = operation_object["operationId"]
            sample_files_directory = SAMPLE_FILES_TEMPLATE_STRING.format(spec_name=spec_name, operation_id=operation_id)

            #Add the x-code-samples field, default to an empty list
            operation_object["x-code-samples"] = []

            #If code samples exist, add them
            if os.path.exists(sample_files_directory):

                #sample code comes in the format of `sample.<extension>`
                for sample_code_file in os.listdir(sample_files_directory):
                    redoc_lang = EXTENSION_TO_LANG[sample_code_file.split(".")[-1]]
                    sample_code_file_contents = None
                    with open(sample_files_directory + sample_code_file) as f:
                        sample_code_file_contents = f.read()

                    operation_object["x-code-samples"].append({
                        "lang": redoc_lang,
                        "source": sample_code_file_contents
                    })

            #If no code samples, add filler text
            else:
                for extension in EXTENSION_TO_LANG.keys():
                    redoc_lang = EXTENSION_TO_LANG[extension]

                    operation_object["x-code-samples"].append({
                        "lang": redoc_lang,
                        "source": "n/a"
                    })

    print(json.dumps(spec_json, indent=4))
