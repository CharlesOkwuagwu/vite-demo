import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'layouts-generated'
import generatedRoutes  from 'pages-generated'
import App from './App.vue'
import 'windi.css'

const routes = setupLayouts(generatedRoutes)

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
