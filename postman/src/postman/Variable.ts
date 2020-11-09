import { IVariable } from "../interfaces/IPostmanColl";


export class Variable implements IVariable {
    id: string;    
    key: string;
    type: string;
    name: string;
    description: string;
    value: string;

    constructor(id: string, key: string, type?: string, name?: string, description?: string){
        this.id = id
        this.key = key;

        this.name = name;

        this.type = type;

        this.description = description;
    }

    
}