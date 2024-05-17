import { ApplicationState } from "../interfaces/application-state";
import { StateManager } from "../patterns/state-manager.pattern";
import { reactive } from 'vue'


export class StateService implements StateManager<ApplicationState> {
    $state = reactive<ApplicationState>({
        comments:[],
        currentUser:null,
        messages:[],
        online:true,
        users:[]
    });
}