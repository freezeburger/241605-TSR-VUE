import { UniqueID } from "./generics"
import { User } from "./user"

export interface Message {
    userId: User['id']
    id: UniqueID
    title: string
    body: string
  }
  