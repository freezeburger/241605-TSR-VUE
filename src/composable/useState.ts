import { inject } from "vue";
import { STATE_MANAGER } from "../core/services/state.service";

export function useState(){
    const stateManager = inject(STATE_MANAGER);

    if(!stateManager) throw 'No State Provided';

    return stateManager.$state
}