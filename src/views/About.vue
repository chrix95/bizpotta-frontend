<template>
  <div>
    <section class="hero-section sub-pages about-background hero-bg-bg1 hero-bg-bg2 bg-gradient1">
      <div class="text-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10 v-center">
              <div class="header-heading">
                <h1 class="wow fadeInUp" data-wow-delay=".2s">
                  <span>Make your business startup, planning and management very easy!</span>
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Bizpotta is an Integrated Business Solutions Portal for all your business needs. We aim to make things easier and within reach for you and your business!
                </p>
                <div class="buttons-groups">
                  <a href="#" class="btn btn-lg btn-normal btn-filled">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about-agency sub-pages pad-tb" style="padding-top: 150px">
      <div class="container">
        <div class="row mb-50">
          <div class="col-lg-7 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10">Research, prepare your business plan & calculate start up costs...</h3>
              <p>
                We give you access to resources that will help you research about your business, prepare your business plan, and calculate how much it will cost you to start up your business successfully.
              </p>
              <a href="#" class="btn btn-lg btn-normal blue"> Learn More </a>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="image-block">
              <img src="images/about/bizpotta-hub-image.png" alt="about" class="img-fluid no-shadow" />
            </div>
          </div>
        </div>
        <div class="row mb-50">
          <div class="col-lg-5">
            <div class="image-block">
              <img src="images/about/bizpotta-funds-image.png" alt="about" class="img-fluid no-shadow" />
            </div>
          </div>
          <div class="col-lg-7 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10">Get access to available capital and funding opportunities.</h3>
              <p>
                With Bizpotta, businesses and startups are provided with access to different funding opportunities i order to raise capital for starting or growing their businesses.
              </p>
              <a href="#" class="btn btn-lg btn-normal lemon"> Learn More </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10">Get business support and advice, meet business professionals.</h3>
              <p>
                Bizpotta provides a business hub where you can meet and network with other business professionals. You can also get business support and management services, as well as speak to the BizDoctor for help.
              </p>
              <a href="#" class="btn btn-lg btn-normal blue"> Learn More </a>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="image-block">
              <img src="images/about/bizpotta-support-image.png" alt="about" class="img-fluid no-shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="in-numbers">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="common-heading">
              <span style="color: #68ab27">Our Achievements</span>
              <h3 class="mb-10">In Numbers</h3>
              <span>Find out what we’ve achieved so far...</span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-50">
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor newlemon">
              <p>We've helped</p>
              <h4 class="code-lemon">275+</h4>
              <p>Businesses</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor newblue">
              <p>We've educated</p>
              <h4 class="code-blue">410+</h4>
              <p>Business Owner</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor newlemon">
              <p>We partners with</p>
              <h4 class="code-lemon">35+</h4>
              <p>Agencies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="blue-section">
      <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10 v-center">
              <div class="header-heading">
                <h1 class="wow fadeInUp" data-wow-delay=".2s">
                  <span>Let’s help you build your business, gain relevant knowledge and access funding and support.</span>
                </h1>
                <div class="buttons-groups">
                  <a href="#" class="btn btn-lg btn-normal btn-filled">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="service-section service-2 pad-tb">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 v-center">
            <div class="common-heading how text-l">
              <span>Our</span>
              <h3>Partnering Agencies</h3>
              <p>
                We partner with nataional and international agencies and companies bring you top-notch business growth and sustenance solutions to ensure your business grows and expands beyond your dreams.
              </p>
            </div>
          </div>
          <div class="col-lg-5 v-center">
            <div class="image-block">
              <img
                src="images/about/partner-logos.svg"
                alt="about"
                class="img-fluid no-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonials style="background: #eff0f8;"/>
  </div>
</template>
<script>
import Testimonials from '../components/_partials/Testimonials.vue'
export default {
  components: { Testimonials },
  name: "About"
}
</script>
<style scoped>
.common-heading p {
  color: #666;
}
.common-heading.how>span {
  color: #517FD9;
}
.btn.btn-lg.btn-normal.blue {
  background: transparent;
  border: 2px solid #517FD9;
  border-radius: 0px;
  color: #517FD9;
  font-size: 14px;
  font-weight: 600;
}
.btn.btn-lg.btn-normal.lemon {
  background: transparent;
  border: 2px solid #68AB27;
  border-radius: 0px;
  color: #68AB27;
  font-size: 14px;
  font-weight: 600;
}
.pad-tb {
  padding-top: 80px;
  padding-bottom: 80px;
}
#blue-section {
  background: #517FD9;
  padding-top: 80px;
  padding-bottom: 80px;
}
#blue-section h1 {
  font-size: 40px;
  line-height: 45px;
  margin-bottom: 30px;
}
#blue-section h1>span {
  color: #fff;
}
#blue-section .buttons-groups a.btn {
  border: 2px solid #FCFBFB;
  border-radius: 2px;
  color: #fff;
}
.service-section:before {
  height: auto;
}
</style>
