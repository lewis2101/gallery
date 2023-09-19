import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/Main.vue')
    },
    {
        path: '/item/:id',
        name: 'item',
        component: () => import('../views/One-Item.vue')
    },
    {
        path: '/favourites',
        name: 'favourites',
        component: () => import('../views/Favourites.vue')
    }
]

const router: Router = createRouter({
    // history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    next()
})

export default router