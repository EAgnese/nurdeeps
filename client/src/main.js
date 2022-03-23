import { createApp } from 'vue'
import App from './App.vue'
import router from './/router.js'

app.use(router)
const app = createApp(App).mount('#app')
