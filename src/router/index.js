import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Layout from '../components/Layout/index.vue';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/offline',
      children: [
        {
          path: '/offline',
          name: 'Offline',
          component: () => import('@/views/Offline/index.vue')
        },
        {
          path: '/online',
          name: 'Online',
          component: () => import('@/views/Online/index.vue')
        },
        {
          path: '/center',
          name: 'Center',
          component: () => import('@/views/Center/index.vue'),
          meta: {
            keepAlive: true
          }
        },
      ]
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
