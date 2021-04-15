import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/home.vue'
import About from './../pages/about.vue'


const routerHistory=createWebHistory()

const router=createRouter({
    history:routerHistory,
    routes:[
        { path: '/', component: Home,name:'home' },
        { path: '/about', component: About },
    ]
})

export default router;