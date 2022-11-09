import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue'
      ),
  },
  {
    path: '/list',
    name: 'ListDataBindingView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ListDataBindingView", webpackPrefetch: true */ '../views/ListDataBindingView.vue'
      ),
  },
  {
    path: '/pagetitle',
    name: 'NestedComponentView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NestedComponentView", webpackPrefetch: true */ '../views/NestedComponentView.vue'
      ),
  },
  {
    path: '/parent',
    name: 'ParentCompView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ParentCompView", webpackPrefetch: true */ '../views/ParentCompView.vue'
      ),
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "SlotUseModalLayout", webpackPrefetch: true */ '../views/SlotUseModalLayout.vue'
      ),
  },
  {
    path: '/storeAccess',
    name: 'StoreAccessView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "StoreAccessView", webpackPrefetch: true */ '../views/StoreAccessView.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
