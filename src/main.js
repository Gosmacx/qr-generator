import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

// import axios from 'redaxios';
// const appAxios = axios.create({
//    baseURL: "localhost",
// })
// app.config.globalProperties.$appAxios = appAxios;


const app =  createApp(App)


app.mount('#app')
