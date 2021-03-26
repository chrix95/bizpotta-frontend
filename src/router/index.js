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
      return import('../views/Learning.vue')
    }
  },
  {
    path: '/funds',
    name: 'Funds',
    component: function () {
      return import('../views/Funds.vue')
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
      return import('../views/Auth/Login.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import('../views/Auth/Register.vue')
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  document.title = `Bizpotta | ${to.name}`
  window.scroll(0, 0)
})

export default router
