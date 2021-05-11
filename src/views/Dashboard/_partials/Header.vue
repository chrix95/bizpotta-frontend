<template>
  <div class="container-fluid no-gutters">
    <div class="row">
      <div class="col-lg-12 p-0">
        <div
          class="header_iner d-flex justify-content-between align-items-center"
        >
          <div class="sidebar_icon d-lg-none">
            <i class="ti-menu"></i>
          </div>
          <div class="serach_field-area">
            <div class="search_inner">
              <form action="#">
                <div class="search_field">
                  <input type="text" placeholder="Search here..." />
                </div>
                <button type="submit">
                  <img src="dashboard/img/icon/icon_search.svg" alt="" />
                </button>
              </form>
            </div>
          </div>
          <div
            class="header_right d-flex justify-content-between align-items-center"
          >
            <div class="header_notification_warp d-flex align-items-center">
              <li>
                <a href="#"> <img src="dashboard/img/icon/bell.svg" alt="" /> </a>
              </li>
              <!-- <li>
                <a href="#"> <img src="dashboard/img/icon/msg.svg" alt="" /> </a>
              </li> -->
            </div>
            <div class="profile_info">
              <img src="dashboard/img/client_img.png" alt="#" />
              <div class="profile_info_iner">
                <p>{{ fullname }}</p>
                <h5>Dr. Robar Smith</h5>
                <div class="profile_info_details">
                  <router-link to="/auth/logout">Log Out <i class="ti-shift-left"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" style="margin: auto 30px">
        <h3>{{ setTitle }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "DashboardHeader",
  data() {
    return {};
  },
  computed: {
    ...mapState(['user']),
    fullname() {
      return `${this.user && this.user.first_name} ${this.user.last_name}`
    },
    setTitle() {
      return this.$route.meta.pageTitle
    }
  }
};
</script>
<style scoped>
  h3 {
    color: #13114F;
  }
</style>