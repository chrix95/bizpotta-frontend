import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from "../store";

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
      return import('../views/Hub.vue')
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
      return import('../views/Contact.vue')
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
  },
  {
    path: '/auth/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Index.vue'),
    meta: { requiresAuth: true, pageTitle: 'Dashboard' }
  },
  {
    path: '/auth/hub',
    name: 'DashboardHub',
    component: () => import('../views/Dashboard/Hub.vue'),
    meta: { requiresAuth: true, pageTitle: 'Hub' }
  },
  {
    path: '/auth/learning',
    name: 'DashboardLearning',
    component: () => import('../views/Dashboard/Learning.vue'),
    meta: { requiresAuth: true, pageTitle: 'Learning' }
  },
  {
    path: '/auth/funds',
    name: 'DashboardFunds',
    component: () => import('../views/Dashboard/Funds.vue'),
    meta: { requiresAuth: true, pageTitle: 'Funds' }
  },
  {
    path: '/auth/profile',
    name: 'DashboardProfile',
    component: () => import('../views/Dashboard/Profile.vue'),
    meta: { requiresAuth: true, pageTitle: 'Profile' }
  },
  {
    path: '/auth/settings',
    name: 'DashboardSettings',
    component: () => import('../views/Dashboard/Settings.vue'),
    meta: { requiresAuth: true, pageTitle: 'Settings' }
  },
  {
    path: '/auth/logout',
    name: 'Logout',
    component: () => import('../views/Dashboard/Logout.vue'),
    meta: { requiresAuth: true, pageTitle: 'Logout' }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  store
})

router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem("setResponse");
  if (to.matched.some(record => record.meta.requiresAuth) && loggedIn == null) {
    next("/login");
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    // NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  document.title = `Bizpotta | ${to.meta.requiresAuth ? to.meta.pageTitle : to.name}`
  window.scroll(0, 0)
  // NProgress.done();
})

export default router
