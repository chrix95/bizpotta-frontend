<template>
  <div>
    <Navigation v-if="$route.name !== 'Login' && $route.name !== 'Register'"/>
    <router-view />
    <FooterComponent v-if="$route.name !== 'Login' && $route.name !== 'Register'"/>
  </div>
</template>
<script>
import FooterComponent from "@/components/_partials/Footer";
import Navigation from "@/components/_partials/Navigation";
export default {
  name: "App",
  components: {
    FooterComponent,
    Navigation,
  },
};
</script>

<style>
.owl-dots, .owl-nav {
  display: none !important;
}
</style>
