import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import AboutPage from './about.vue'
import HomePage from './home.vue'
import Project1 from "./project1.vue"
import Project2 from "./project2.vue"
import CallButton from './components/callButton.vue'
import CustomHeader from './components/customHeader.vue'
import ContactForm from './components/contactForm.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: AboutPage },
        { path: '/home', component: HomePage },
        { path: '/project1', component: Project1 },
        { path: '/project2', component: Project2 },
    ]
});

const app = createApp(App)
app.use(router);

app.component('call-button', CallButton)
app.component('custom-header', CustomHeader)
app.component('contact-form', ContactForm)
// createApp(AboutPage).mount('#aboutPage')
// createApp(HomePage).mount('#homePage')

app.mount('#app')