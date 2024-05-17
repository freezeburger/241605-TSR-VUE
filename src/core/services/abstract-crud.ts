import { UniqueID } from "../interfaces/generics";
import { CrudService, ServiceResponse } from "../patterns/crud-service.pattern";

export abstract class AbstractCrudService<T extends {id:UniqueID}> implements CrudService<T>{

    constructor(private URL: `http://${string}` ){}
    
    create(payload: Omit<T, "id">): Promise<ServiceResponse<T>> {
        throw new Error("Method not implemented.");
    }

    read(): Promise<ServiceResponse<T[]>>;
    read(id: number): Promise<ServiceResponse<T>>;
    read(id?: number | undefined): Promise<ServiceResponse<T | T[]>>;
    read(id?: unknown): Promise<ServiceResponse<T>> | Promise<ServiceResponse<T[]>> | Promise<ServiceResponse<T | T[]>> {
        
        const url = this.URL + (id ? '/' + id :'');
        return fetch(url).then<T | T[]>( res => res.json() ).then(data =>({data}))

    }
    update(target: T, payload: Partial<T>): Promise<ServiceResponse<T>> {
        throw new Error("Method not implemented.");
    }
    delete(target: T): Promise<ServiceResponse<T>> {
        throw new Error("Method not implemented.");
    }
}