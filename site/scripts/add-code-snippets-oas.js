/*
 * add-code-snippets-to-oas.js
 *
 * This script runs on docsite generation to modify the OpenAPI specs to support Redoc's code snippet extension.
 *
 * The code sample files are stored in the following format
 * 
 *     code-snippets/<SpecName>/<OperationId>/sample.<extension>
 * 
 * Pseudo code for the script
 * 
 * for each OpenAPI spec:
 *     read into a JSON object
 *     for each operationId:
 *         add the x-code-samples field and default it to []
 *         build the file path
 *         for each file:
 *             add the object {
 *                 "lang": "<switch on lang based on file extension>",
 *                 "source": "<file contents>"
 *             }
 *     save the OpenAPI spec
 */
const fs = require('fs');

const ENV_SYNTAX_FIND_AND_REPLACE = require('./env-replace.json');
function replace_environmental_variables(strn) {

    for (var find in ENV_SYNTAX_FIND_AND_REPLACE) {
        var replace = ENV_SYNTAX_FIND_AND_REPLACE[find];
        strn = strn.replace(find, replace);
    }

    return strn
}

//Converts the file extension to the proper Redoc `lang` tag
const EXTENSION_TO_LANG = {
    "cs": "C#",
    "java": "Java",
    "php": "PHP",
    "py": "Python",
    "rb": "Ruby",
    "ts": "TypeScript",
    "js": "JavaScript"
};

var spec_name = '';
var operation_id = '';
const SPEC_SOURCE_DIRECTORY = 'specs-source/';
const SPEC_OUTPUT_DIRECTORY = 'specs/';

var files = fs.readdirSync(SPEC_SOURCE_DIRECTORY);
files.forEach(spec => {
    var spec_json = JSON.parse(fs.readFileSync(SPEC_SOURCE_DIRECTORY + spec));
    spec_name = spec_json["info"]["title"];

    //This results in every URL defined in the OpenAPI spec
    for (var path in spec_json["paths"]) {
        var path_object = spec_json["paths"][path];

        //This results in every HTTP method defined on the URL
        for (var operation in path_object) {
            var operation_object = path_object[operation];

            //operation_id is what we are matching code samples on
            operation_id = operation_object["operationId"];
            var sample_files_directory = `code-snippets/${spec_name}/${operation_id}/`;

            //Add the x-code-samples field, default to an empty list

            //If code samples exist, add them
            if (fs.existsSync(sample_files_directory)) {
                const CODE_SAMPLES = "x-codeSamples";

                operation_object[CODE_SAMPLES] = [];
                var sample_code_files = fs.readdirSync(sample_files_directory);
                 sample_code_files.forEach(sample_code_file => {
                    var redoc_lang = EXTENSION_TO_LANG[sample_code_file.split(".").slice(-1)];
                    var sample_code_file_contents = fs.readFileSync(sample_files_directory + sample_code_file, 'utf8');
                    sample_code_file_contents = replace_environmental_variables(sample_code_file_contents);

                    operation_object[CODE_SAMPLES].push({
                        "lang": redoc_lang,
                        "source": sample_code_file_contents
                    });
                });
            }
        }
    }
    fs.writeFileSync(SPEC_OUTPUT_DIRECTORY + spec, JSON.stringify(spec_json, null, 4), { flag: 'w+' });
});
