import { IPostmanFolder, IPostmanItem, IAuth, IVariable } from "../interfaces/IPostmanColl";
import {PostmanItem} from './PostmanItem'
import { OpenAPI, OpenAPIV2, OpenAPIV3 } from "openapi-types";
import {HttpMethods} from '../enums/HttpMethods'
import {ApiVersions} from '../enums/ApiVersions'
import Url from 'url-parse'
import { Auth } from "./Auth";
import { Variable } from "./Variable";
import { Helper } from "./Helper";


export class PostmanFolder implements IPostmanFolder {
    name: string;
    item: IPostmanItem[] = [];
    auth: IAuth

    constructor(oas: OpenAPI.Document){

        this.name = oas.info.title;

        Helper.setCurrentName(this.name);

        this.auth = new Auth('basic', this.getAuthVariable(this.name))

        let version: ApiVersions;
        
        if((<OpenAPIV2.Document>oas).swagger) {
           version = ApiVersions.Swagger
        } else if((<OpenAPIV3.Document>oas).openapi){
            version = ApiVersions.OpenAPI
        }

        let rootUrl:string;

        if((oas as OpenAPIV2.Document).host){
            rootUrl = (oas as OpenAPIV2.Document).host;
        } else {
            rootUrl = (oas as OpenAPIV3.Document).servers[0].url;
        }

        for(var path in oas.paths){
            var pathItem = oas.paths[path];

            var url = new Url(rootUrl.concat(path));
            for(var key in HttpMethods){
                if( pathItem[key])
                    this.item.push(new PostmanItem(url, key, pathItem[key], version));
            }
        }

    }

    getAuthVariable(oasName: string ): IVariable[]{

        let vars: IVariable[] = [];
        var user = new Variable('username', 'username', 'string')
        var pass = new Variable('password', 'password', 'string')

        if(oasName == 'Messaging'){            
            user.value = '{{apiToken}}'
            pass.value = '{{apiSecret}}'
        } else {
            user.value = '{{username}}'  
            pass.value = '{{password}}'
        } 

        vars.push(user)
        vars.push(pass)


        return vars

    }


}