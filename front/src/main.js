import { createApp } from 'vue'
import router from './router.js'
import './style.css'
import App from './App.vue'
import './assets/custom.css'
// import './assets/script.js'

createApp(App)
.use(router)
.mount('#app')
