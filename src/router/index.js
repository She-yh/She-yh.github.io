import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
const routes = [
    {path:'/',redirect:"/home"},
    {path:'/about',component: ()=>import('@/pages/AboutPage/index.vue')},
    {path:'/home',component: ()=>import('@/pages/HomePage/index.vue')},
    {path:'/work',component: ()=>import('@/pages/WorkPage/index.vue')},
]

export default createRouter({
    history:createWebHashHistory(),
    routes,
})