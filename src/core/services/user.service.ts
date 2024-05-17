
import { User } from "../interfaces/user";
import { CrudService, ServiceResponse } from "../patterns/crud-service.pattern";


const URL = 'https://jsonplaceholder.typicode.com/users';

export class UserService implements CrudService<User>{

    create(_payload: Omit<User, "id">): Promise<ServiceResponse<User>> {
        throw new Error("Method not implemented.");
    }

    read(): Promise<ServiceResponse<User[]>>;
    read(id: number): Promise<ServiceResponse<User>>;
    read(id?: number | undefined): Promise<ServiceResponse<User | User[]>> {
        
        const url = URL + (id ? '/' + id :'');
        return fetch(url).then<User | User[]>( res => res.json() ).then(data =>({data}))

    }
    update(_target: User, _payload: Partial<User>): Promise<ServiceResponse<User>> {
        throw new Error("Method not implemented.");
    }
    delete(_target: User): Promise<ServiceResponse<User>> {
        throw new Error("Method not implemented.");
    }

    
}