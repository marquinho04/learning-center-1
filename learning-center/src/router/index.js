import { createRouter, createWebHistory } from 'vue-router'

// Vistas de páginas (ajusta las rutas si es necesario según tu estructura)
import HomePage from '../domains/public/pages/home.component.vue'
import CheckInPage from '../domains/registration/pages/check-in.component.vue'
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
        path: '/registration/event-check-ins/new',
        name: 'CheckIn',
        component: CheckInPage
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
