import { IPostmanItem, IVariable, IRequest, IResponse } from "../interfaces/IPostmanColl";
import { OpenAPI } from "openapi-types";
import { ApiVersions } from "../enums/ApiVersions";
import {Request} from "./Request";
import Url from 'url-parse'


export class PostmanItem implements IPostmanItem {
    id?: string;
    name?: string;
    description?: string;
    variable?: IVariable[];
    request: IRequest;
    response?: IResponse[];

    constructor(url: Url, method: string, operation : OpenAPI.Operation, type: ApiVersions) {

        this.name = operation.operationId;
        this.description = operation.description;

        this.request = new Request(url, method, operation, type);
        



        
    }




}