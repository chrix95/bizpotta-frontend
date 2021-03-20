import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/hub',
    name: 'Hub',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/learning',
    name: 'Learning',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/funds',
    name: 'Funds',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import('../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
