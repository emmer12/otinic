import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/home.vue'
import router from './router/routes.js'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'


const app =createApp(App)
  // app.use(VueMaterial)
  app.use(router)

app.mount('#app')
