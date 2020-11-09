


export interface IPostmanColl {
    info : IInfo
    item : IPostmanFolder[]
    variable: IVariable[]
}

export interface IInfo {

}

export interface IPostmanFolder {
    name: string
    item: (IPostmanFolder | IPostmanItem)[]
}

export interface IAuth {
    type: string
    basic: IVariable[]
}

export interface IPostmanItem {
    id? : string
    name? : string
    description?: string
    variable?: IVariable[]
    request: IRequest
    response?: IResponse[]
}

export interface IVariable {
    id: string
    key: string
    type: string
    name: string
    description: string
    value: string
}

export interface IRequest {
    url: IUrl  
    auth: string
    method: string
    description: string
    header: IHeader[]
    body: IBody
}

export interface IResponse {
    id: string
    originalRequest: IRequest
    code: number
    status: string
    header: IHeader[]
}

export interface IUrl {
    raw: string
    protocol: string
    host: string[]
    path: string[]
    variable: IVariable[]
}

export interface IHeader {
    key: string
    value: string
    disabeled: boolean
    description: string

}

export interface IBody {
    mode: string
    raw: string
    options: { raw: { language: string } }

}