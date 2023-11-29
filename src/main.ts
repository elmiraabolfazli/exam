import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
App.use(createPinia())

createApp(App).mount('#app')
