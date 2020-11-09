import { IHeader } from "../interfaces/IPostmanColl";


export class Header implements IHeader {
    key: string;    
    value: string;
    disabeled: boolean;
    description: string;

    constructor(key: string, value: string, disabled?: boolean, description?: string ){
        this.key = key
        this.value = value

        if(disabled)
            this.disabeled = disabled

        if(description)
            this.description = description
    }

}