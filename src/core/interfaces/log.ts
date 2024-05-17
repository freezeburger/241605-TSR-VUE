import { UniqueID } from "./generics";

export interface Log{
    id:UniqueID;
    level:'DEBUG' | 'INFO' | 'WARNING';
    content:string;
}