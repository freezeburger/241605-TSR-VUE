import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { STATE_MANAGER, StateService } from './core/services/state.service'

const app = createApp(App)
app.provide( STATE_MANAGER, new StateService() )
app.mount('#app')


