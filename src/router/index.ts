import { createRouter, createWebHistory, type RouteRecordRaw, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import DefaultLayout from '../layouts/default-layout.vue'
import AdminLayout from '../layouts/admin-layout.vue'
import MerchantLayout from '../layouts/merchant-layout.vue'

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
        component: () => import('../views/default/index.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/default/home/about.vue')
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
        component: () => import('../views/admin/dashboard.vue')
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
        component: () => import('../views/merchant/products.vue')
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
