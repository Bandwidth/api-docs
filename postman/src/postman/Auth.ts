import { IAuth, IVariable } from "../interfaces/IPostmanColl";


export class Auth implements IAuth {
    type: string;    
    basic: IVariable[];

    constructor(type: string, basic: IVariable[]){
        this.type = type
        this.basic = basic
    }


}