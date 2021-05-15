<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-lg-4">
        <settings-sidemenu />
      </div>
      <div class="col-lg-8">
        <h5 class="__title">Account</h5>
        <h5 class="mt-15">Profile</h5>
        <p>This information will be displayed to the public, so take note of what you add.</p>
        <h5 class="mt-15">Photo</h5>
        <div class="d-flex align-items-center justify-content-start mt-15">
          <img src="images/dashboard/profile-picture.svg" width="12%">
          <button type="button" class="btn btn-outline-primary ml-20">Change</button>
          <button type="button" class="btn btn-link ml-20">Remove</button>
        </div>
        <hr>
        <form>
          <div class="row">
            <div class="col-md-4 col-lg-4">
              <div class="form-group">
                <label for="first_name">Firstname</label>
                <input type="text" name="first_name" v-model="fields.first_name" class="form-control">
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="form-group">
                <label for="middle_name">Middlename</label>
                <input type="text" name="middle_name" v-model="fields.middle_name" class="form-control">
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="form-group">
                <label for="last_name">Lastname</label>
                <input type="text" name="last_name" v-model="fields.last_name" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="lastname" class="form-control">
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea name="bio" id="bio" cols="30" rows="5" class="form-control"></textarea>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-4 col-lg-4">
              <div class="form-group">
                {{ fields.email }}
                <label for="email_address">Email Address</label>
                <input type="email" name="email_address" v-model="fields.email" class="form-control">
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" name="phone" v-model="fields.phone" class="form-control">
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="form-group">
                <label for="country">Country</label>
                <select name="country" id="country" class="form-control">
                  <option selected disabled>Select an option</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Singapore">Singapore</option>
                  <option value="United States of America">United States of America</option>
                </select>
              </div>
            </div>
          </div>
          <hr>
          <div class="buttons d-flex align-items-center justify-content-end">
            <button type="button" class="btn btn-link">Cancel</button>
            <button type="button" class="btn btn-outline-primary ml-20">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import SettingsSidemenu from '../_partials/SettingsSidemenu'
export default {
  name: "Account",
  components: {
    SettingsSidemenu
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    this.fields.first_name = this.user.first_name
    this.fields.last_name = this.user.last_name
    this.fields.phone = this.user.phone
    this.fields.email = this.user.email
  },
  data() {
    return {
      fields: {
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
      }
    }
  },
};
</script>
<style scoped>
h5 {
  color: #13114F;
  margin-bottom: 0px;
}
p {
  font-size: 13px;
}
.__title {
  font-size: 20px;
  color: #13114F;
}
.btn-outline-primary {
  border-color: #13114F;
  color: #13114F;
  border: 1px solid #13114F;
  border-radius: 2px;
  padding: 8px 18px;
}
.btn-outline-primary:hover {
  background: #13114F;
  color: #FFF;
}
.btn-link {
  text-decoration: none;
  color: #13114F;
  font-weight: bold;
}
.form-control {
  border-radius: .15rem;
  border: 1px solid #C4C4C4;
  box-shadow: 0px 1px 4px #E5E5E5;
}
</style>