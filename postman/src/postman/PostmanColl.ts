import { IPostmanColl, IInfo, IPostmanFolder, IVariable } from "../interfaces/IPostmanColl";


export class PostmanColl implements IPostmanColl {
    info: IInfo;    
    item: IPostmanFolder[];
    variable: IVariable[];

    constructor(){
        
    }


}