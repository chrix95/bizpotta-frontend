<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-md-12 col-lg-1"></div>
      <div class="col-md-12 col-lg-10">
        <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="user.email_verified_at == undefined">
          <img src="images/icons/warning-icon.svg" class="v-center" srcset="">
          Account not yet verified. Click here to verify your account and complete registration.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="images/dashboard/slider-image.svg" alt="First slide">
              <div class="carousel-caption dashboard-text d-none d-md-block">
                <h5>Banners for events highlights, ads, infographics, announcements, etc.</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="images/dashboard/slider-image.svg" alt="Second slide">
              <div class="carousel-caption dashboard-text d-none d-md-block">
                <h5>Banners for events highlights, ads, infographics, announcements, etc.</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="images/dashboard/slider-image.svg" alt="Third slide">
              <div class="carousel-caption dashboard-text d-none d-md-block">
                <h5>Banners for events highlights, ads, infographics, announcements, etc.</h5>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div class="white_box mb_30">
          <div class="box_header">
            <div class="main-title">
              <h5 class="mb-0">Learning</h5>
            </div>
          </div>
          <div class="card" style="background-image: url(images/dashboard/learning-image-1.svg);background-size: cover;background-position: center center;padding: 1rem 0; min-width: 100%;">
            <div class="card-body">
              <p class="card-text">Starting a business in the 21st century</p>
            </div>
          </div>
          <div class="card" style="background-image: url(images/dashboard/entrepreneurship-image-1.svg);background-size: cover;background-position: center center;padding: 1rem 0; min-width: 100%;">
            <div class="card-body">
              <p class="card-text">Entrepreneurship 101</p>
            </div>
          </div>
          <div class="card" style="background-image: url(images/dashboard/leadership-image-1.svg);background-size: cover;background-position: center center;padding: 1rem 0; min-width: 100%;">
            <div class="card-body">
              <p class="card-text">The leadership mindset</p>
            </div>
          </div>
          <div class="view_more">
            <a href="#">
              View more courses
              <img src="images/icons/bx-right-arrow-alt.svg" alt="" srcset="">
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="white_box mb_30">
          <div class="box_header">
            <div class="main-title">
              <h5 class="mb-0">Welcome to your Bizpotta dashboard</h5>
            </div>
          </div>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <img src="images/dashboard/icons/bx-user.svg" alt="" srcset="">
              Personal profile
              <span class="percentage_completion">20% complete</span>
              <span class="">
                <img src="images/dashboard/icons/bx-chevron-right.svg" alt="" srcset="">
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <img src="images/dashboard/icons/bx-briefcase.svg" alt="" srcset="">
              Business profile
              <span class="percentage_completion">0% complete</span>
              <span class="">
                <img src="images/dashboard/icons/bx-chevron-right.svg" alt="" srcset="">
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card" style="background: #13114F;margin-top: 0px">
          <div class="card-body">
            <h5 class="card-title text-white lh-20">Become a service provider with Bizpotta</h5>
            <div class="view_more">
              <a href="#">
                Get Started
                <img src="images/icons/bx-right-arrow-alt.svg" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="white_box mb_30 mt-30">
          <div class="box_header">
            <div class="main-title">
              <h5 class="mb-0">Business Tools</h5>
            </div>
          </div>
          <ul class="list-group business_tool">
            <li class="align-items-center justify-content-between">
              <img src="images/dashboard/icons/bx-file.svg" alt="" srcset="">
              Write Business Plan
            </li>
            <li class="align-items-center justify-content-between">
              <img src="images/dashboard/icons/bx-book-content.svg" alt="" srcset="">
              Accounting & Book-keeping
            </li>
            <li class="align-items-center justify-content-between">
              <img src="images/dashboard/icons/bxs-coin.svg" alt="" srcset="">
              Tax Remmittance
            </li>
          </ul>
          <div class="view_more">
            <a href="#">
              Access other tools
              <img src="images/icons/bx-right-arrow-alt.svg" alt="" srcset="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "Dashboard",
  computed: {
    ...mapState(['user'])
  },
};
</script>
<style scoped>
.white_box>.card>.card-body>p {
  font-size: 15px;
  line-height: 16px;
  font-weight: 400;
}
.card {
  margin-top: 15px;
  border: none;
}
.card>.card-body>.card-text {
  color: #FFF;
}
.view_more {
  margin-top: 15px;
}
.view_more a {
  color: #68AB27;
  font-size: 13px;
}
.main-title h5 {
  color: #13114F;
}
.list-group-item {
  border-radius: .25rem;
  margin-bottom: 20px;
  padding: 20px 1.25rem;
  font-weight: 600;
  font-size: 14px;
}
.list-group-item:first-child {
  background: #F3FFE7;
}
.list-group-item:last-child {
  background: #EAE9FF;
}
.list-group-item+.list-group-item {
  border-top-width: thin;
}
.list-group.business_tool>li>img {
  margin-right: 10px;
}
.list-group.business_tool>li {
  margin: 10px 0px;
}
.carousel-indicators li {
  position: relative;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  background-color: rgba(255,255,255,.5);
}
.carousel-indicators li::before {
  position: absolute;
  top: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "";
}
.carousel-indicators li::after {
  position: absolute;
  bottom: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "";
}
.carousel-indicators .active {
  background-color: #fff;
}
.carousel-caption.dashboard-text h5 {
  font-size: 26px;
  width: 80%;
  line-height: 28px;
  color: #13114F;
}
</style>