<template>
  <!-- Testimonials -->
  <section class="service-section service-2 pad-tb">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="common-heading">
            <span style="color: #517fd9">Testimonials</span>
            <h3 class="mb-10">What people say about us</h3>
            <span
              >We have helped thousands of businesses succeed. Hear their
              reviews about us.</span
            >
          </div>
        </div>
      </div>
      <div class="upset link-hover mt-50">
        <carousel
          :items="1"
          :autoplay="true"
          :nav="false"
          :responsive="{
            0: { items: 1, nav: false },
            600: { items: 1, nav: false },
          }"
        >
          <div class="items">
            <div class="row">
              <div class="col-lg-5">
                <img
                  src="images/testimonial.jpg"
                  class="d-block w-100"
                  alt="testimony images"
                />
              </div>
              <div class="col-lg-6 v-center">
                <img
                  src="images/icons/quote-icon.svg"
                  class="d-block"
                  style="width: 50px; margin-bottom: 30px"
                  alt="testimonial-quote"
                />
                <p class="quote">
                  I never knew i could find a one-stop-shop to all my business
                  problems. I found myself in the Bizpotta Platform, and since
                  then, my business has found success and growth.
                </p>
                <h5 class="name">Christopher Columbus</h5>
                <p class="designation">CEO, MicroFarms LTD</p>
              </div>
            </div>
          </div>
          <div class="items">
            <div class="row">
              <div class="col-lg-5">
                <img
                  src="images/testimonial.jpg"
                  class="d-block w-100"
                  alt="testimony images"
                />
              </div>
              <div class="col-lg-6 v-center">
                <img
                  src="images/icons/quote-icon.svg"
                  class="d-block"
                  style="width: 50px; margin-bottom: 30px"
                  alt="testimonial-quote"
                />
                <p class="quote">
                  I never knew i could find a one-stop-shop to all my business
                  problems. I found myself in the Bizpotta Platform, and since
                  then, my business has found success and growth.
                </p>
                <h5 class="name">Ajayi Olugbenga</h5>
                <p class="designation">CEO, MicroFarms LTD</p>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  name: "Testimonials",
  components: {
    carousel,
  },
};
</script>
<style scoped>
</style>