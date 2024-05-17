import { UniqueID } from "./generics"
import { Message } from "./message"
import { User } from "./user"

export interface Comment {
    messageId: Message['id'];
    userId: User['id'];
    id: UniqueID;
    text: string;
}
  