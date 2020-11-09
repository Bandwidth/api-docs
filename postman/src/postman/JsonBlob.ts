import { OpenAPIV3, OpenAPIV2 } from "openapi-types";
import { Helper } from "./Helper";

export class JsonBlob {
    [key: string]: string | JsonBlob | JsonBlob[];

    constructor(props: {[key: string] : any} ){
        
        for(var name in props){

            var origName = name

            var prop = props[name]

            if(prop.xml) name = prop.xml.name
    
            if(prop.type == 'object'){
                this[name] = new JsonBlob(prop.properties)
            } else if(prop.type == 'array' && prop.items.type == 'object'){
                
                if(prop.xml){
                    this[name] = new JsonBlob(prop.items.properties)
                } else {
                    this[name] =[ new JsonBlob(prop.items.properties) ]
                }
                
            } else if(prop.type == 'array') {
                
                if(prop.items.xml){
                    this[name] = { };
                    //@ts-ignore
                    this[name][prop.items.xml.name] = `${prop.items.type}`
                } else {
                    this[name] = `[ ${ prop.items.type} ]`
                }
                
            } else if (prop.type == 'string' && name == 'applicationId') {
                this[name] = `{{${Helper.getCurrentName()}applicationId}}`
            } else if ( Helper.isCollectionVariable(origName) ) {
                this[name] = `{{${origName}}}`;
            } else {
                this[name] = `${prop.type}`;
            }
            
        }
        
    }
}