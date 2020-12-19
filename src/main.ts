import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {setAntd} from  './assets/antd'


const app = createApp(App)
setAntd(app)
app.use(store).use(router).mount("#app")

