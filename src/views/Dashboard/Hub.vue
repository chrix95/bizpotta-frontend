<template>
  <div class="container-fluid p-0">
    <div class="row mt-50 w-100 h-100 d-inline-block justify-content-center align-items-center" v-if="hubResult.data === undefined || hubResult.data.length === 0">
      <div class="col-lg-12">
        <img
          src="images/dashboard/icons/search-iconfinder.svg"
          class="img mx-auto d-block"
          width="20%"
        />
      </div>
      <div class="col-lg-12">
        <p class="text-center">No search result 😥...</p>
      </div>
    </div>
    <div class="row mt-50 justify-content-center align-items-center" v-else>
      <div class="col-lg-12">
        <div
          class="white_box mb_30"
          v-for="(item, index) in hubResult.data"
          :key="index"
        >
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div class="details">
                <h3>{{ item.business_name }}</h3>
                {{ JSON.parse(item.services).join(", ") }} <br />
                <a :href="`mailto:${item.email}`">{{ item.email }}</a> <br />
                <a :href="`tel:+${item.phone}`">{{ item.phone }}</a>
              </div>
              <!-- <span class="percentage_completion">20% complete</span> -->
              <div class="view_more">
                <a href="#">
                  Request
                  <img
                    src="images/icons/bx-right-arrow-alt.svg"
                    alt=""
                    srcset=""
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import HubService from "@/services/HubService";
export default {
  name: "Hub",
  computed: {
    ...mapState(["hubResult"]),
  },
  mounted() {
    this.fetchHubDetails();
  },
  methods: {
    fetchHubDetails() {
      this.$store.dispatch("setLoading", true);
      HubService.businesses()
        .then((result) => {
          if (result.data.status == "success") {
            this.$store.dispatch("setHubResult", result.data.data);
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
  },
};
</script>
<style scoped>
p {
  font-size: 14px;
}
.details {
  text-align: left !important;
}
.details h3 {
  margin: 0;
}
.view_more a {
  color: #68ab27;
  font-size: 13px;
}
</style>