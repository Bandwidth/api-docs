import { IRequest, IUrl, IBody, IHeader } from "../interfaces/IPostmanColl";
import { OpenAPI, OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { ApiVersions } from "../enums/ApiVersions";
import { Url } from "./Url";
import { Header } from "./Header";
import UrlParsed from 'url-parse'
import { Body } from "./Body";


export class Request implements IRequest {
    url: IUrl;
    auth: string;
    method: string
    description: string
    header: IHeader[]
    body: IBody

    constructor(url: UrlParsed, method: string, operation: OpenAPI.Operation, type: ApiVersions) {

        this.method = method
        this.description = operation.description

        this.url = new Url(url, getPathVariables(operation.parameters) );
        

        if(type == ApiVersions.OpenAPI){
            var operationV3 = <OpenAPIV3.OperationObject>operation;

            this.header = getAPIV3Headers(operationV3.parameters)

            
            if(operationV3.requestBody && (operationV3.requestBody as OpenAPIV3.RequestBodyObject).content["application/json"]){
                var schema = (operationV3.requestBody as OpenAPIV3.RequestBodyObject).content["application/json"].schema
                this.body = new Body(schema);
            } else if (operationV3.requestBody && (operationV3.requestBody as OpenAPIV3.RequestBodyObject).content["application/xml"]) {
                var schema = (operationV3.requestBody as OpenAPIV3.RequestBodyObject).content["application/xml"].schema
                this.body = new Body(schema, true);
            }

        } else if(type == ApiVersions.Swagger){
            var operationV2 = (<OpenAPIV2.OperationObject>operation)
            
            this.header = getAPIV2Headers(operationV2.parameters)

            var schemav2 = (<OpenAPIV2.SchemaObject>getBodyParam(operationV2.parameters))
            this.body = new Body(schemav2);
        }
    }
}



function getPathVariables(parameters: (OpenAPIV2.ReferenceObject | OpenAPIV2.InBodyParameterObject | OpenAPIV2.GeneralParameterObject)[] | (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[]) : string[]{
    
    var arr: string[] = []

    if( parameters == null || typeof parameters[Symbol.iterator] !== 'function'  ) return arr

    for(var param of parameters){

        if((param as OpenAPIV2.GeneralParameterObject).in == 'path'){
            param = <OpenAPIV2.GeneralParameterObject>param;

            arr.push(param.name)
        } 
    }

    return arr

}

function getBodyParam(parameters: (OpenAPIV2.ReferenceObject | OpenAPIV2.InBodyParameterObject | OpenAPIV2.GeneralParameterObject)[] | (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[]) : OpenAPIV2.Schema {
    
    var arr: string[] = []

    if( parameters == null || typeof parameters[Symbol.iterator] !== 'function'  ) return arr

    for(var param of parameters){

        if((param as OpenAPIV2.GeneralParameterObject).in == 'body'){
            param = <OpenAPIV2.InBodyParameterObject>param;

            return param.schema
        } 
    }

    return null

}

function getAPIV3Headers(parameters: (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[]) : IHeader[] {

    let headers: IHeader[] = []

    if( parameters == null || typeof parameters[Symbol.iterator] !== 'function'  ) return headers

    for(var param of parameters ){

        if((param as OpenAPIV3.ReferenceObject).$ref){
            //do nothing
        } else {
            param = (<OpenAPIV3.ParameterObject>param)
            if(param.in == 'header'){
                headers.push(new Header(param.name, '<string>'))
            }
        }
    }

    return headers

}

function getAPIV2Headers(parameters: (OpenAPIV2.ReferenceObject | OpenAPIV2.InBodyParameterObject | OpenAPIV2.GeneralParameterObject)[]) : IHeader[] {

    let headers: IHeader[] = []

    if( parameters == null || typeof parameters[Symbol.iterator] !== 'function'  ) return headers

    for(var param of parameters ){

        if((param as OpenAPIV2.InBodyParameterObject).in == 'header'){
            param = (<OpenAPIV2.InBodyParameterObject>param)
            if(param.in == 'header'){
                headers.push(new Header(param.name, '<string>'))
            }
        }
    }
    return headers

}