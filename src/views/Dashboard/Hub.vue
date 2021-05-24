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
      <div class="col-lg-12" v-if="searchParam !== ''">
        <button class="btn btn btn-sm btn-primary mtb-15 btn-primary float-right" @click="resetSearch()">
          Clear selection
        </button>
      </div>
      <div class="col-lg-12">
        <pagination v-model="hubResult.current_page" :per-page="hubResult.per_page" :records="hubResult.total" @paginate="myCallback"/>
      </div>
      <div class="col-lg-12">
        <div
          class="white_box mb_20"
          v-for="(item, index) in hubResult.data"
          :key="index"
        >
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <img src="dashboard/img/client_img.png" :alt="item.business" width="64px" />
              <div class="details">
                <h3>{{ item.business_name }}</h3>
                {{ JSON.parse(item.services).join(", ") }} <br />
                <a :href="`mailto:${item.email}`">{{ item.email }}</a> <br />
                <a :href="`tel:+${item.phone}`">{{ item.phone }}</a>
              </div>
              <span class="percentage_completion">{{ Math.round(Math.random() * 100) }} completed</span>
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
      <div class="col-lg-12">
        <pagination v-model="hubResult.current_page" :per-page="hubResult.per_page" :records="hubResult.total" @paginate="myCallback"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import HubService from "@/services/HubService";
import Pagination from 'vue-pagination-2';
export default {
  name: "Hub",
  components: {
    Pagination,
  },
  computed: {
    ...mapState(["hubResult", "searchParam"]),
    currentPage() {
      return this.hubResult.current_page ? this.hubResult.current_page : 1
    }
  },
  mounted() {
    if (Object.keys(this.hubResult).length === 0) {
      this.fetchHubDetails();
    }
  },
  methods: {
    myCallback(response) {
      this.fetchHubDetails(this.searchParam, response)
    },
    resetSearch() {
      this.$store.dispatch("setSearchParameter", '')
      this.fetchHubDetails(this.searchParam, 1)
    },
    fetchHubDetails(search = this.searchParam, page = this.currentPage) {
      this.$store.dispatch("setLoading", true);
      HubService.businesses(search, page)
        .then((result) => {
          if (result.data.status == "success") {
            this.$store.dispatch("setHubResult", result.data.data);
            window.scrollTo(0,0)
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
.white_box {
  padding: 5px;
  border-radius: 0px;
}
</style>