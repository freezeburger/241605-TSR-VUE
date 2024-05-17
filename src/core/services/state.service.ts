import { ApplicationState } from "../interfaces/application-state";
import { StateManager } from "../patterns/state-manager.pattern";
import { InjectionKey, reactive } from 'vue'

export class StateService implements StateManager<ApplicationState> {
    $state = reactive<ApplicationState>({
        comments:[],
        currentUser:null,
        messages:[],
        online:true,
        users:[]
    });

    constructor(){
        window.addEventListener('online', this.handleConnectionStatus )
        window.addEventListener('offline', this.handleConnectionStatus )
    }

    handleConnectionStatus = () => {
        this.$state.online = window.navigator.onLine;
    }
}

export const STATE_MANAGER = Symbol('STATE_MANAGER') as InjectionKey<StateService>;

