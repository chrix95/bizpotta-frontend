<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-lg-12" style="position: relative">
        <div class="card profile" style="background-image: url('images/dashboard/profile-bg.svg')">
          <img src="images/dashboard/profile-picture.svg" class="profile_image">
        </div>
      </div>
    </div>
    <div class="card-offset-right row">
      <div class="col-lg-12">
        <div class="mt-30">
          <h5>{{ fullname }}</h5>
          <p>
            {{ user.first_name }} is a creative and versatile UI/UX Designer with front end web development skills who specializes in visual design, interaction design and product design. He’s a problem solver who uses practical approach to solve complex problems.
          </p>
          <hr>
          <div class="contact-details d-flex justify-content-between align-items-center mtb-20">
            <span class="d-flex justify-content-between align-items-center">
              <img src="images/dashboard/icons/bxs-map.svg" style="margin-right: 5px">
              Nigeria
            </span>
            <span class="d-flex justify-content-between align-items-center">
              <img src="images/dashboard/icons/bxs-city.svg" style="margin-right: 5px">
              Abuja
            </span>
            <span class="d-flex justify-content-between align-items-center">
              <img src="images/dashboard/icons/bxs-envelope-open.svg" style="margin-right: 5px">
              <a href="mailto:akaolisaobinna@gmail.com">{{ user.email }}</a>
            </span>
            <span class="d-flex justify-content-between align-items-center">
              <img src="images/dashboard/icons/bxs-phone-call.svg" style="margin-right: 5px">
              <a href="tel:+2348038633503">
                {{ user.phone }}
              </a>
            </span>
          </div>
          <hr>
        </div>
      </div>
      <div class="col-lg-12">
        <h6 class="mt-30">Interests:</h6>
        <div class="row">
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Business</li>
            </ul>
          </div>
          <div class="col-lg-3">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Entrepreneurship</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Technology</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Agriculture</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Finance</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Learning</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Leadership</li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="interest_list d-flex justify-content-between align-items-center">
              <li class="rounded-pill">Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "Profile",
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
.card.profile {
  background-size: cover;
  background-position: top center;
  height: 150px;
}
.profile_image {
  position: absolute;
  top: 55%;
  width: 12%;
  left: 5%;
}
.card-offset-right {
  padding-left: 250px;
  width: 95%;
}
.card-offset-right h5 {
  color: #13114F;
  font-size: 26px;
}
.card-offset-right p {
  font-size: 14px;
  color: #000;
}
.contact-details>span {
  font-size: 15px;
}
h6 {
  font-size: 17px;
  font-weight: bold;
  color: #13114F;
}
.interest_list>li {
  background-color: #838282;
  padding: 14px 23px;
  color: #fff;
  margin-top: 15px;
}
</style>