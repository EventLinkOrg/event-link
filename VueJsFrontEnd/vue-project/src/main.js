import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles/main.css'


import './assets/main.css'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.use(router)
app.use(vuetify)

app.mount('#app')
