// import './assets/main.css'
import 'element3/lib/theme-chalk/index.css'

import { createApp } from 'vue'
import Element3 from 'element3'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Element3)

app.mount('#app')
