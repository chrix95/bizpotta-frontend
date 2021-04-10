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
                  <span>Get in touch with us!</span>
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Contact us if you have any questions. <br> We’d be quite glad to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="grey-background pad-tb" style="background: #FCFAFB;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="row justify-content-center side-icons">
              <div class="col-lg-2 v-center">
                <img src="images/email.svg" alt="" srcset="">
              </div>
              <div class="col-lg-10">
                <a href="mailto:info@bizpotta.com">info@bizpotta.com,</a> <br>
                <a href="mailto:support@bizpotta.com">support@bizpotta.com</a>
              </div>
            </div>
            <div class="row justify-content-center side-icons mt-50">
              <div class="col-lg-2 v-center">
                <img src="images/phone.svg" alt="" srcset="">
              </div>
              <div class="col-lg-10">
                <a href="tel:+23480300001">+234 803 00 001</a> <br>
                <a href="tel:+23480300002">+234 803 00 002</a>
              </div>
            </div>
            <div class="row justify-content-center socials">
              <div class="col-lg-12">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <img src="images/socials/facebook-logo.svg" alt="facebook-logo"
                        class="img-fluid no-shadow" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="images/socials/instagram-logo.svg" alt="instagram-logo"
                        class="img-fluid no-shadow" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="images/socials/twitter-logo.svg" alt="twitter-logo"
                        class="img-fluid no-shadow" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="images/socials/linkedin-logo.svg" alt="linkedin-logo"
                        class="img-fluid no-shadow" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="images/socials/youtube-logo.svg" alt="youtube-logo"
                        class="img-fluid no-shadow" />
                    </a>
                  </li>
                </ul>
              </div>
						</div>
          </div>
          <div class="col-lg-6">
            <form action="#" method="post" class="signin-form">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <i class="fa fa-user inset-icon" aria-hidden="true"></i>
                    <input type="text" name="name" class="form-control" placeholder="Your name" required />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <i class="fa fa-envelope inset-icon" aria-hidden="true"></i>
                    <input type="email" name="email"  class="form-control" placeholder="Email address" required />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <i class="fa fa-mobile inset-icon" aria-hidden="true"></i>
                    <input type="text" name="phone"  class="form-control" placeholder="Phone number" required />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <i class="fa fa-pencil inset-icon" aria-hidden="true"></i>
                    <textarea name="message" class="form-control" cols="30" placeholder="Your message" rows="10" required></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <a class="btn btn-lg btn-normal btn-filled btn-block blue-fill">Submit</a>
                  </div>
                </div>
              </div>
            </form>
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
.hero-section.sub-pages.about-background.bg-gradient1 {
  padding-top: 50px;
  height: 400px;
}
a.btn.btn-lg.btn-normal.btn-filled {
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}
form.signin-form input::placeholder, form.signin-form textarea::placeholder {
  color: #C4C4C4;
}
form.signin-form input {
  padding: 30px 60px;
  border: 3px solid #E5E5E5;
}
form.signin-form textarea {
  padding: 15px 60px;
}
.fa.fa-mobile.inset-icon {
  left: 5%;
  top: 37%;
  transform: translate(50%, -40%);
}
i.fa.fa-user.inset-icon {
  position: absolute;
  left: 5%;
  top: 37%;
  transform: translate(50%, -40%);
  color: #C4C4C4;
}
.fa.fa-pencil.inset-icon {
  top: 10%;
  transform: translate(50%, -50%);
}
.socials {
  margin-top: 35px;
}
.socials ul>li {
  display: inline-block;
  margin: 20px;
}
.socials ul>li>a>img {
  width: 100%;
}
.side-icons img {
  width: 60%;
}
.side-icons a {
  color: #5E5C5C;
  font-size: 20px;
}
</style>
