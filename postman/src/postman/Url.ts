import { IUrl, IVariable } from "../interfaces/IPostmanColl";
import Urlparsed from 'url-parse'
import { Variable } from "./Variable";
import { Helper } from "./Helper";



export class Url implements IUrl {
    raw: string;    
    protocol: string;
    host: string[];
    path: string[];
    variable: IVariable[];

    constructor(url: Urlparsed, pathVariables: string[] ){

        this.raw = url.href

        this.protocol = url.protocol.replace(':', '')

        var hostArr = url.host.split('.')
        hostArr.shift()
        this.host = hostArr

        this.path = this.transformVariable(url.pathname.split('/'));

        this.variable = [];
        for(var str of pathVariables){
            this.variable.push(new Variable(str, str))
        }
    }


    transformVariable(pathVariables: string[] ){

        for(var idx = 0;  idx < pathVariables.length; idx++){
            var str = pathVariables[idx]
            if(str.startsWith('{') && str.endsWith('}')){
                if(Helper.isCollectionVariable(str)){
                    pathVariables[idx] = `{${str}}`
                } else {
                    pathVariables[idx] = ':' + str.substring(1, str.length - 1);
                }
            }
        }

        return pathVariables

    }

    


}