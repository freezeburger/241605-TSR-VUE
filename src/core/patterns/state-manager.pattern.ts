
import { reactive } from 'vue'


export interface StateManager<S extends Object >{

    $state:ReturnType<typeof reactive<S>>;
    // $state = reactive({})
}



 


