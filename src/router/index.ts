import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";

const routes = [
    {
        path: '/',
        name: "Home",
        component: home
    },
    {
        path: '/about',
        name: "About",
        component: () => import(/** webpackChunkName: "about" */'../views/about.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes as any,
})

export default router;