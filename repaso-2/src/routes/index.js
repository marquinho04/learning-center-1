import { createRouter, createWebHistory } from 'vue-router'

// Vistas de páginas (ajusta las rutas si es necesario según tu estructura)
import HomePage from '../domains/public/pages/home.component.vue'
import PerformancePage from '../domains/performance/pages/performance.component.vue'
import NotFoundPage from '../domains/public/pages/page-not-found.component.vue'

const routes = [
    {
        path: '/',
        redirect: '/home' // Redirigir la raíz hacia Home
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/nursing/examiner-performance-overview',
        name: ' Examiner Performance Overview',
        component: PerformancePage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
