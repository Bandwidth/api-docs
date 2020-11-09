# Postman Collection Generator

This project takes a postman collection skeleton and inserts an API reference namespaced folder to the end. <br/>
It uses a folder containing 'n' number of Open API specs with each Open API becoming a sub folder of request within the API reference folder.

## Usage

To build the project run 
<br/>
`npm run build`

To execute a built project run
<br/>
`npm run start -- -c path/to/postman_collection -s path/to/open_api_spec_folder`

*Note the `--` in the above command is necessary to pass arguments to the the script and not to npm.*

| Options              | Short Code | Usage                                                                                                       |
|----------------------|------------|-------------------------------------------------------------------------------------------------------------|
| --postman_collection | -c         | The file path to the postman collection skeleton                                                            |
| --spec_folder        | -s         | The folder path to the directory containing all Open API Specs to be used in the creation of the collection |
| --name               | -n         | (optional) The file name to save the generated collection as, default: `postman.json`                       |