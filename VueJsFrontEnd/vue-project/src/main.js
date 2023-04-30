import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)





app.use(router)
app.mount('#app')

createApp(App)
  .use(router)
  .use(BootstrapVue)
  .use(IconsPlugin)
  .mount('#app')

// const vuetify = createVuetify({
//     components,
//     directives,
// })
// createApp(App).use(router).use(BootstrapVue).use(IconsPlugin).mount('#app')





