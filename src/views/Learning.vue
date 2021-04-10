<template>
  <div>
    <section
      class="hero-section sub-pages about-background hero-bg-bg1 hero-bg-bg2 bg-gradient1"
    >
      <div class="text-block">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10 v-center">
              <div class="header-heading">
                <h1 class="wow fadeInUp" data-wow-delay=".2s">
                  <span>Learn outstanding business skills.</span>
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Set your business apart from competitors by gaining the
                  knowledge <br> that gives you the winning edge and makes you better
                  by far.
                </p>
                <div class="buttons-groups">
                  <a href="#" class="btn btn-lg btn-normal btn-filled blue-fill">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grey-background pad-tb">
      <div class="container">
        <div class="row mb-50">
          <div class="col-lg-6 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10 code-blue">Bizpotta Learning Institute</h3>
              <p>
                The Bizpotta Learning Institute is a massive business and
                vocational education platform designed to help entrepreneurs
                advance their learning and master their craft.
              </p>
              <p>
                Through our hands-on learning approaches, participants who pass
                through the Bizpotta Learning Institute are equipped with the
                requisite skills needed to build profitable businesses.
              </p>
              <p>
                The BLI is your one-stop-shop platform for building
                knowledgeable entrepreneurs.
              </p>
              <a href="#" class="btn btn-lg btn-normal blue">
                Start your learning journey
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-block">
              <img
                src="images/learning/img-start-learning-journey.svg"
                alt="about"
                class="img-fluid no-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="white-background pad-tb">
      <div class="container">
        <div class="row mb-50 justify-content-center">
          <div class="col-lg-6">
            <div class="image-block">
              <img
                src="images/learning/skilling-domains.svg"
                alt="about"
                class="img-fluid no-shadow"
              />
            </div>
          </div>
          <div class="col-lg-6 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10 code-lemon">Vocational Education</h3>
              <p>
                Bizpotta gives you access to an array of resources designed to
                take your career and vocational training to the next level.
                Equip yourself to find your place in the world through the
                Bizpotta Vocational Education Platform.
              </p>
              <p>
                Begin your skill acquisition journey with a wide array of
                resources and increase your value in the marketplace.
              </p>
              <a href="#" class="btn btn-lg btn-normal lemon">
                Start your learning journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="service-section service-2 pad-tb grey-background">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="common-heading">
              <h3 class="mb-10" style="color: rgba(19, 17, 79, 1)">Available Courses</h3>
              <span
                >See a section of some of the courses available in the Bizpotta
                learning Institute.</span
              >
            </div>
          </div>
        </div>
        <div class="row justify-content-center upset shape-numm mt-50">
          <carousel
            :items="3"
            :autoplay="true"
            :nav="false"
            :responsive="{
              0: { items: 3, nav: true },
              600: { items: 3, nav: true },
            }"
          >
            <div class="items">
              <div
                class="col-lg-12 col-sm-12 shape-loc wow fadeInUp"
                data-wow-delay=".2s"
                style="
                  visibility: visible;
                  animation-delay: 0.2s;
                  animation-name: fadeInUp;
                "
              >
                <div class="office-card">
                  <div class="skyline-img">
                    <h3>Starting your Business</h3>
                  </div>
                  <div class="office-text">
                    <h4>Starting your Business: The essentials</h4>
                    <p>
                      Learn the nitty-gritty of starting your business in this
                      course.
                    </p>
                    <p><span>Offered By:</span> GOTNI Leardership Centre</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div
                class="col-lg-12 col-sm-12 shape-loc wow fadeInUp"
                data-wow-delay=".2s"
                style="
                  visibility: visible;
                  animation-delay: 0.2s;
                  animation-name: fadeInUp;
                "
              >
                <div class="office-card">
                  <div class="skyline-img">
                    <h3>Writing a business plan</h3>
                  </div>
                  <div class="office-text">
                    <h4>How to write your business plan.</h4>
                    <p>
                      In this course, you will be exposed to the best way to
                      write business plans.
                    </p>
                    <p><span>Offered By:</span> City & Guild, London.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div
                class="col-lg-12 col-sm-12 shape-loc wow fadeInUp"
                data-wow-delay=".2s"
                style="
                  visibility: visible;
                  animation-delay: 0.2s;
                  animation-name: fadeInUp;
                "
              >
                <div class="office-card">
                  <div class="skyline-img">
                    <h3>The 21st Century Entrepreneur</h3>
                  </div>
                  <div class="office-text">
                    <h4>Business thinking in the 21st Century</h4>
                    <p>
                      Think like a business man or woman of the 21st century.
                    </p>
                    <p><span>Offered By:</span> GOTNI Leardership Centre</p>
                  </div>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="-cta-btn mt70">
          <div
            class="free-cta-title v-center"
            data-wow-delay=".4s"
          >
            <a href="#" class="btn btn-lg btn-normal blue access-masterclass">
              Start your learning journey
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="white-background pad-tb">
      <div class="container">
        <div class="row mb-50 justify-content-center">
          <div class="col-lg-6 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10 code-lemon">Bizpotta Certificate Program</h3>
              <p>
                Bizpotta gives you access to an array of resources designed to
                take your career and vocational training to the next level.
                Equip yourself to find your place in the world through the
                Bizpotta Vocational Education Platform.
              </p>
              <p>
                Begin your skill acquisition journey with a wide array of
                resources and increase your value in the marketplace.
              </p>
              <a href="#" class="btn btn-lg btn-normal lemon">
                Earn a Business Certificate
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-block">
              <img
                src="images/learning/certificates.svg"
                alt="about"
                class="img-fluid no-shadow"
              />
            </div>
          </div>
        </div>
        <div class="row mb-50 justify-content-center">
          <div class="col-lg-6">
            <div class="image-block">
              <img
                src="images/learning/img-bizpotta-incubation-program.svg"
                alt="about"
                class="img-fluid no-shadow"
              />
            </div>
          </div>
          <div class="col-lg-6 v-center">
            <div class="common-heading text-l">
              <h3 class="mb-10 code-blue">Bizpotta Incubation Program</h3>
              <p>
                This bespoke programme is designed for entrepreneurs who are
                working on Start-ups or looking to give life to ambitious new
                ideas.
              </p>
              <p>
                BIP is a highly competitive programme designed to help early
                stage start-ups position and scale for success.
              </p>
              <p>
                Entrepreneurs who pass through BIP receive access to close
                mentorship and monitoring that gives their businesses the needed
                structures needed to build profitable businesses.
              </p>
              <a href="#" class="btn btn-lg btn-normal blue"> Enroll now! </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="service-block grey-background pad-tb">
      <div class="container">
        <div class="row justify-content-center mb-30">
          <div class="col-lg-8">
            <div class="common-heading">
              <h3 class="mb-10 code-blue">Bizpotta Masterclass</h3>
              <span
                >Connect with established entrepreneurs with results to show in
                their business journey and draw from their fountain of
                experience.</span
              >
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <p class="mt-15 text-center" style="font-weight: bold">
              Meet our Masterclass Tutors
            </p>
          </div>
        </div>
        <div class="row justify-content-center upset link-hover">
          <carousel
            :items="2"
            :autoplay="true"
            :nav="false"
            :responsive="{
              0: { items: 2, nav: true },
              600: { items: 2, nav: true },
            }"
          >
            <div class="items">
              <div
                class="col-lg-12 col-md-12 mt30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div class="s-block wide-sblock">
                  <div class="s-card-icon-large">
                    <img
                      src="images/learning/felix-achibiri.svg"
                      alt="service"
                      class="img-fluid"
                    />
                  </div>
                  <div class="s-block-content-large">
                    <h4>Felix Achibiri</h4>
                    <p>The Art or Negotiation in business</p>
                    <a href="#">Watch Masterclass</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div
                class="col-lg-12 col-md-12 mt30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div class="s-block wide-sblock">
                  <div class="s-card-icon-large">
                    <img
                      src="images/learning/taiwo adepoju.png"
                      alt="service"
                      class="img-fluid"
                    />
                  </div>
                  <div class="s-block-content-large">
                    <h4>Taiwo Adepoju</h4>
                    <p>Starting your business the right way</p>
                    <a href="#">Watch Masterclass</a>
                  </div>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="-cta-btn mt70">
          <div
            class="free-cta-title v-center wow zoomInDown"
            data-wow-delay=".4s"
          >
            <a href="#" class="btn btn-lg btn-normal blue access-masterclass">
              Access all masterclasses
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  name: "Learning",
};
</script>
<style scoped>
.common-heading p {
  color: #666;
}
.common-heading.how > span {
  color: rgba(19, 17, 79, 1);
}
.btn.btn-lg.btn-normal.blue {
  background: transparent;
  border: 2px solid rgba(19, 17, 79, 1);
  border-radius: 0px;
  color: rgba(19, 17, 79, 1);
  font-size: 14px;
  font-weight: 600;
}
.btn.btn-lg.btn-normal.lemon {
  background: transparent;
  border: 2px solid #68ab27;
  border-radius: 0px;
  color: #68ab27;
  font-size: 14px;
  font-weight: 600;
}
.pad-tb {
  padding-top: 80px;
  padding-bottom: 80px;
}
.service-section:before {
  height: auto;
}
.grey-background {
  background: #eff0f8;
}
.white-background {
  background: #fff;
}
.grey-background .common-heading p,
.white-background .common-heading p {
  font-size: 21px;
}
.s-block {
  padding: 0px;
  width: 100%;
}
.s-block p {
  font-size: 18px;
  line-height: 23px;
}
.s-block a {
  font-weight: 600;
  font-size: 15px;
  color: rgba(19, 17, 79, 1);
  text-decoration: underline;
}
.s-card-icon-large {
  width: 200px;
}
.s-block-content-large {
  padding: 20px;
  text-align: left;
}
.btn.btn-lg.btn-normal.blue.access-masterclass {
  background: transparent;
  border: 2px solid rgba(19, 17, 79, 1);
  border-radius: 0px;
  color: rgba(19, 17, 79, 1);
  font-size: 20px;
  font-weight: 600;
  padding: 15px 25px;
}
.skyline-img h3 {
  text-align: center;
  color: #fff;
  font-size: 26px;
  line-height: 30px;
}
.skyline-img {
  background: rgba(19, 17, 79, 1);
  padding: 60px 40px;
  border-radius: 0px;
  box-shadow: 0px 2px 8px #6b98ef;
}
.office-text h4 {
  margin: 0 0 10px;
  font-size: 20px;
  line-height: 25px;
}
.office-text {
  padding: 15px 0 0;
}
.office-text p {
  padding: 0px;
  margin: 0 0 16px;
  font-size: 15px;
}
.office-text p:nth-child(3) span {
  color: rgba(19, 17, 79, 1);
}
.items {
  padding: 0px 30px;
}
</style>
