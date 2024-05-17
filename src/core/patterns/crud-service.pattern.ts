import { UniqueID } from "../interfaces/generics"

/**
 * Standardized reponse from API call.
 */
export interface ServiceResponse<T>{
    data:T;
    error?:string;
}

/**
 * All data service must implements this interface.
 * @example
 * 
 * class MyDataService implements CrudService<{}>{
 * }
 */
export interface CrudService<T extends {id:UniqueID}>{

    create( payload:Omit<T, 'id'> ):Promise< ServiceResponse<T> >;

    read():Promise<ServiceResponse<T[]>>;
    read( id:UniqueID ):Promise<ServiceResponse<T>>;
    read( id?:UniqueID ):Promise<ServiceResponse<T[] | T >>;

    update( target:T , payload:Partial<T>):Promise<ServiceResponse<T>>;

    delete( target:T ):Promise<ServiceResponse<T>>;
}

// type UserService = CrudService<User>
