import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {layout: "main"},
        component: () => import("../views/Home")
    },
    {
        path: "/login",
        name: "login",
        meta: {layout: "empty"},
        component: () => import("../views/Login.vue")
    },
    {
        path: "/categories",
        name: "categories",
        meta: {layout: "main"},
        component: () => import("../views/Categories.vue")
    },
    {
        path: "/detail-record",
        name: "detail_record",
        meta: {layout: "main"},
        component: () => import("../views/DetailRecord")
    },
    {
        path: "/history",
        name: "history",
        meta: {layout: "main"},
        component: () => import("../views/History")
    },
    {
        path: "/planning",
        name: "planning",
        meta: {layout: "main"},
        component: () => import("../views/Planning")
    },
    {
        path: "/profile",
        name: "profile",
        meta: {layout: "main"},
        component: () => import("../views/Profile")
    },
    {
        path: "/record",
        name: "record",
        meta: {layout: "main"},
        component: () => import("../views/Record")
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
