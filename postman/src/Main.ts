import SwaggerParser from 'swagger-parser'
import fs from 'fs-extra'
import { OpenAPI } from 'openapi-types'
import glob from 'glob'
import { AppendEngine } from './engine/AppendEngine'
import commandLineArgs  from 'command-line-args'

const commandLineOptions = [
    { name: 'postman_collection', alias: 'c', type: String },
    { name: 'spec_folder', alias: 's', type: String },
    { name: 'name', alias: 'n', type: String, defaultValue: 'postman.json' }
]


 export async function Main() {

    const options = commandLineArgs(commandLineOptions)
    
    let postmanPath = options.postman_collection;
    let oasPath = options.spec_folder;
    let fileName = options.name;

    if(!postmanPath) throw 'Need to supply filepath for postman scaffold to command line like " --postman_collection Path/To/File "'

    if(!oasPath) throw 'Need to supply folder path to command line for API specs like " --spec_folder Path/To/Folder "'

    console.log("Generating Postman Collection")

    console.log('Path to Postman Collection scaffold:  ' + postmanPath)

    console.log('Path to the Open API spec folder:  ' + oasPath)


    let postman = JSON.parse(fs.readFileSync(postmanPath).toString())

    let oasStack = await getOasStack(oasPath)


    AppendEngine.append(oasStack, postman)

    console.log('Writing New Postman Collection:  ' + fileName)

    fs.outputFileSync(fileName, JSON.stringify( postman, null, 4))

    console.log('Finished')

}


async function getOasStack(folder: string) : Promise<OpenAPI.Document[]>   {

    let stack = [];

    let pattern = folder.concat('/**/*.json')

    let list = glob.sync(pattern)

    for(var path of list ){


        var api = await SwaggerParser.dereference(path)

        stack.push(api)
    }

    return stack
}