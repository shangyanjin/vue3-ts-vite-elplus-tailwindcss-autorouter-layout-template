import type { RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import MerchantLayout from '../layouts/MerchantLayout.vue'

// Dynamic routes configuration
const modules = import.meta.glob('../views/**/*.vue')

// Base routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/default/Index.vue')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/default/Home.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: () => import('../views/admin/Dashboard.vue')
      }
    ]
  },
  {
    path: '/merchant',
    component: MerchantLayout,
    children: [
      {
        path: '',
        name: 'merchant-products',
        component: () => import('../views/merchant/Products.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Dynamic route registration
Object.entries(modules).forEach(([path, component]) => {
  const routePath = path
    .replace('../views', '')
    .replace('.vue', '')
    .replace('/index', '')
    .toLowerCase()
  
  if (!routes.some(route => route.path === routePath)) {
    router.addRoute({
      path: routePath,
      component: component as any
    })
  }
})

// Navigation guard for route validation
router.beforeEach((_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  next()
})

export default router
