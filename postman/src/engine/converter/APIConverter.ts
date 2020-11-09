import { IPostmanFolder } from "../../interfaces/IPostmanColl";
import { OpenAPI, OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { PostmanFolder } from "../../postman/PostmanFolder";


export class APIConverter {

    static convert(oas : OpenAPI.Document) : IPostmanFolder {

        return new PostmanFolder(oas);

    }

}