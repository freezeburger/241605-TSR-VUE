import { UniqueID } from "../interfaces/generics";
import { CrudService, ServiceResponse } from "../patterns/crud-service.pattern";

const headers = {
    'Content-Type': 'application/json'
} as const

/* interface Config{
    method: 'GET' | 'DELETE' | 'POST' | 'PUT'
    headers: typeof headers
    body?:string;
} */

type Config = {
    method: 'GET' | 'DELETE' 
    headers: typeof headers
} | {
    method:  'POST' | 'PUT'
    headers: typeof headers;
    body:string;
}

/* type Config ={
    [Key in keyof RequestConfig]: RequestConfig[Key];
}
 */
const request:Config = {
    method:"POST",
    headers,
    body:''
} as const;

type ValidURL = `http://${string}`

export abstract class AbstractCrudService<T extends { id: UniqueID }> implements CrudService<T> {

    constructor(private URL: ValidURL) { }

    create(payload: Omit<T, "id">): Promise<ServiceResponse<T>> {
        const url = this.URL as ValidURL;
        const config: Config = { ...request, method: 'POST', body: JSON.stringify(payload) }
        return this.request(url, config)
    }

    read(): Promise<ServiceResponse<T[]>>;
    read(id: number): Promise<ServiceResponse<T>>;
    read(id?: number | undefined): Promise<ServiceResponse<T | T[]>>;
    read(id?: unknown): Promise<ServiceResponse<T>> | Promise<ServiceResponse<T[]>> | Promise<ServiceResponse<T | T[]>> {

        const url = this.URL + (id ? '/' + id : '') as ValidURL;
        return this.request(url)
    }
    update(target: T, payload: Partial<T>): Promise<ServiceResponse<T>> {
        const url = this.URL + (target.id ? '/' + target.id : '') as ValidURL;
        const config: Config = { ...request, method: 'PUT', body: JSON.stringify(payload) }
        return this.request(url, config)
    }
    delete(target: T): Promise<ServiceResponse<T>> {
        const url = this.URL + (target.id ? '/' + target.id : '') as ValidURL;
        const config: Config = { ...request, method: 'DELETE' }
        return this.request(url, config)
    }

    private request<T>(url: typeof this.URL, config?: Config) {
        return fetch(url, config).then<T>(res => res.json()).then(data => ({ data }))
    }
}