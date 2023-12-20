import {createRouter, createWebHashHistory} from 'vue-router'
// @ts-ignore
import Page from "../components/page.vue";

const routes = [
    // 注意这里使用路由path:'/'，Home, 如果你在app.vue  已经加载了首页，要删除app.vue中的组件，不然会重复加载

    {
        path: '/',
        name: "index",
        component: Page
    },
]


const router = createRouter({
    // @ts-ignore
    scrollBehavior: () => ({y: 0}),
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
})

export default router;
