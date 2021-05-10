<template>
  <nav class="sidebar">
    <div class="logo d-flex justify-content-between">
      <router-link to="/">
        <img src="images/logo-light.svg" alt="" />
      </router-link>
      <div class="sidebar_close_icon d-lg-none">
        <i class="ti-close"></i>
      </div>
    </div>
    <ul id="sidebar_menu" class="main_menu">
        <li class="main_menu_list" :class="[currentRoute === 'Dashboard' ? 'active' : '']">
            <router-link to="/auth/dashboard">
                <img src="images/icons/dashboard-icon-active.svg" v-if="currentRoute === 'Dashboard'" alt="">
                <img src="images/icons/dashboard-icon.svg" v-else alt="">
                Dashboard
            </router-link>
        </li>
        <li class="main_menu_list" :class="[currentRoute === 'DashboardHub' ? 'active' : '']">
            <router-link to="/auth/hub">
                <img src="images/icons/hub-icon-active.svg" v-if="currentRoute === 'DashboardHub'" alt="">
                <img src="images/icons/hub-icon.svg" v-else alt="">
                Hub
            </router-link>
        </li>
        <li class="main_menu_list" :class="[currentRoute === 'DashboardLearning' ? 'active' : '']">
            <router-link to="/auth/learning">
                <img src="images/icons/learning-icon-active.svg" v-if="currentRoute === 'DashboardLearning'" alt="">
                <img src="images/icons/learning-icon.svg" v-else alt="">
                Learning
            </router-link>
        </li>
        <li class="main_menu_list" :class="[currentRoute === 'DashboardFunds' ? 'active' : '']">
            <router-link to="/auth/funds">
                <img src="images/icons/funds-icon-active.svg" v-if="currentRoute === 'DashboardFunds'" alt="">
                <img src="images/icons/funds-icon.svg" v-else alt="">
                Funds
            </router-link>
        </li>
        <li class="main_menu_list" :class="[currentRoute === 'DashboardProfile' ? 'active' : '']">
            <router-link to="/auth/profile">
                <img src="images/icons/profile-icon-active.svg" v-if="currentRoute === 'DashboardProfile'" alt="">
                <img src="images/icons/profile-icon.svg" v-else alt="">
                Profile
            </router-link>
        </li>
        <li class="main_menu_list" :class="[currentRoute === 'DashboardSettings' ? 'active' : '']">
            <router-link to="/auth/settings">
                <img src="images/icons/settings-icon-active.svg" v-if="currentRoute === 'DashboardSettings'" alt="">
                <img src="images/icons/settings-icon.svg" v-else alt="">
                Settings
            </router-link>
        </li>
        <li class="main_menu_list">
            <router-link to="/auth/logout"  style="color: #94F236 !important; font-weight: bold; letter-spacing: 1px">
                <img src="images/icons/logout-icon.svg">
                Logout
            </router-link>
        </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "DashboardSidebar",
  computed: {
    currentRoute() {
      return this.$route.name
    }
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
ul.main_menu {
    padding-left: 20px;
}
ul.main_menu>.main_menu_list {
    margin: 20px auto;
}
ul.main_menu>.main_menu_list.active {
    border: 2px solid #fff;
}
ul.main_menu>.main_menu_list.active>a{
    color: #68AB27 !important;
    background: #FFF !important;
    font-weight: bold !important;
    font-size: 16px !important;
    border-left: 5px solid #94F236;
}
ul.main_menu>.main_menu_list>a{
    color: #FFF !important;
}
</style>
