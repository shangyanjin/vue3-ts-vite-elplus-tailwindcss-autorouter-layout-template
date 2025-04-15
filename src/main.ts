import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { FontAwesomeIcon } from './plugins/fontawesome'

const app = createApp(App)

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
