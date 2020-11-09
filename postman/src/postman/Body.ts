import { IBody } from "../interfaces/IPostmanColl";
import { OpenAPI, OpenAPIV3, OpenAPIV2 } from "openapi-types";
import { JsonBlob } from "./JsonBlob";
import xml2js from 'xml-js'


export class Body implements IBody {
    mode: string;    
    raw: string;
    options: { raw: { language: string; }; } = {raw: {language: ''}}

    constructor(schema: OpenAPIV3.SchemaObject | OpenAPIV2.SchemaObject, isXml = false){

        if(!schema) return

        var jsonBlob = new JsonBlob(schema.properties);

        if(isXml){

            var obj = { };
            //@ts-ignore
            obj[schema.xml.name] = jsonBlob
            jsonBlob = obj
        

            this.raw = xml2js.js2xml(jsonBlob, {compact : true, spaces: 2});
            this.options.raw.language = "xml"
        } else {
            this.raw = JSON.stringify(jsonBlob, null, 4);
            this.options.raw.language = "json"
        }

        this.mode = "raw"

    }



}