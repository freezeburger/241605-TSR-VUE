import { Address } from "./address"
import { Company } from "./company"
import { Email, Name, Phone, UniqueID, UserName, Website } from "./generics"


export interface User {
    id: UniqueID
    name: Name
    username: UserName
    email: Email
    address: Address
    phone: Phone
    website: Website
    company: Company
}

export type RequiredUserInfo = Pick<User, 'id' | 'name' | 'username' | 'username'>;

