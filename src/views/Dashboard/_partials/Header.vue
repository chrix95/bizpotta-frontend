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
              <form @submit.prevent="searchHub()">
                <div class="search_field">
                  <input type="text" v-model="searchParam" placeholder="Search here..." />
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
            </div>
            <div class="profile_info">
              <img src="dashboard/img/client_img.png" alt="#" />
              <div class="profile_info_iner">
                <h5>{{ fullname }}</h5>
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
import { mapState } from 'vuex';
import HubService from "@/services/HubService";
export default {
  name: "DashboardHeader",
  data() {
    return {
      searchParam: ''
    };
  },
  computed: {
    ...mapState(['user']),
    fullname() {
      return `${this.user && this.user.first_name} ${this.user.last_name}`
    },
    setTitle() {
      return this.$route.meta.pageTitle
    }
  },
  methods: {
    searchHub() {
      this.$store.dispatch("setLoading", true);
      HubService.businesses(this.searchParam, 1)
        .then((result) => {
          if (result.data.status == "success") {
            this.$store.dispatch("setHubResult", result.data.data);
            this.$store.dispatch("setSearchParameter", this.searchParam)
            this.$router.push({
              name: 'DashboardHub'
            })
          } else {
            this.showAlert(result.data.message, "Error occured");
          }
        })
        .catch((err) => {
          console.log(err.response.status)
          if (err && err.response.status === 401) {
            this.showAlert(
              err.response.data.message,
              "Authorization error"
            );
            this.$store.dispatch("logout")
            this.$router.push({
              name: "Logout"
            })
          }
          if (err.response === undefined) {
            this.showAlert(
              "Oops! took long to get a response",
              "Network error"
            );
          } else {
            this.showAlert(err.response.data.message, "An error occured");
          }
        })
        .finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
    showAlert(text, title, type) {
      this.$fire({
        title: title ? title : "Validation error",
        text,
        type: type ? type : "error",
      });
    },
  }
};
</script>
<style scoped>
  h3 {
    color: #13114F;
  }
</style>