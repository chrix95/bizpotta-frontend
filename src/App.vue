<template>
  <div>
    <div v-if="!dashboardRoute">
      <Navigation v-if="currentRoute !== 'Login' && currentRoute !== 'Register'"/>
      <router-view />
      <FooterComponent v-if="currentRoute !== 'Login' && currentRoute !== 'Register'"/>
    </div>
    <div v-else>
      <side-bar />
      <section class="main_content dashboard_part">
        <header-section />
        <div class="main_content_iner">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import FooterComponent from "@/components/_partials/Footer";
import Navigation from "@/components/_partials/Navigation";
import SideBar from '@/views/Dashboard/_partials/Sidebar.vue';
import HeaderSection from '@/views/Dashboard/_partials/Header.vue';
export default {
  name: "App",
  components: {
    FooterComponent,
    Navigation,
    SideBar,
    HeaderSection
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
    dashboardRoute() {
      return this.$route.meta.requiresAuth
    }
  },
  data() {
    return {}
  },
};
</script>

<style>
.swal2-popup {
  font-size: 0.86rem !important;
}
.owl-dots, .owl-nav {
  display: none !important;
}
.grey-background {
  background: #eff0f8;
}
.white-background {
  background: #fff;
}
.white_box {
  padding: 20px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.box_header {
  margin-bottom: 15px;
} 
</style>
