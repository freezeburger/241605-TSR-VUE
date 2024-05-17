import { Comment } from "./comment";
import { Message } from "./message";
import { User } from "./user"

export interface ApplicationState{
    // Functional
    users:Array<User>;
    currentUser:User | null;
    messages:Message[];
    comments:Comment[];

    // Technical
    online:boolean
}