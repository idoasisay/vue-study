import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView'
import ProductDetailView from '../views/ProductDetailView'
import ProductCreateView from '../views/ProductCreateView'
import ProductUpdateView from '../views/ProductUpdateView'
import SalesListView from '../views/SalesListView'
import ImageInsertView from '../views/ImageInsertView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductListView
  },
  {
    path: '/detail',
    name: 'productDetail',
    component: ProductDetailView
  },
  {
    path: '/create',
    name: 'productCreate',
    component: ProductCreateView
  },
  {
    path: '/update',
    name: 'productUpdate',
    component: ProductUpdateView
  },
  {
    path: '/sales',
    name: 'saleList',
    component: SalesListView
  },
  {
    path: '/image_insert',
    name: 'imageInsert',
    component: ImageInsertView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
