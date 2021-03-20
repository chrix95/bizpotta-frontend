<template>
  <div>
    <Preloader />
    <Navigation />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "@/components/_partials/Footer";
import Preloader from "@/components/_partials/Preloader";
import Navigation from "@/components/_partials/Navigation";
export default {
  name: "App",
  components: {
    FooterComponent,
    Preloader,
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
