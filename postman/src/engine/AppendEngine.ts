import { OpenAPI, OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { IPostmanColl, IPostmanFolder } from "../interfaces/IPostmanColl";
import { PostmanFolder } from "../postman/PostmanFolder";
import { APIConverter } from "./converter/APIConverter";


export class AppendEngine {

    converter: APIConverter

    static append(oasStack : OpenAPI.Document[], postman: IPostmanColl){

        let apiRefrenceFolder = (postman.item[postman.item.length - 1])

        for(var oas of oasStack){


            apiRefrenceFolder.item.push( APIConverter.convert(oas) );
        }
    }
}