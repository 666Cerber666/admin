import * as VueRouter from 'vue-router'
import AdminPanel from './pages/AdminPanel.vue'
import LogIn from './pages/LogIn.vue'
import DashBoard from './pages/DashBoard.vue'



const routes = [
    {
        path: '/',
        name: 'Main',
        component: LogIn
    },
    {
        path: '/AdminPanel',
        name: 'AdminPanel',
        component: AdminPanel
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: DashBoard
    }
]

const router = VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes
})

export default router
