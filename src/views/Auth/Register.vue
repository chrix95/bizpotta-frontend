<template>
    <section class="w3l-login-6">
		<div class="login-hny">
			<div class="form-content">
				<div class="form-right">
					<div class="overlay">
						<div class="grid-info-form">
							<img src="images/logo-white.svg" width="100%" alt="Landing image">
							<h3>Africa’s first Integrated Business Solutions Portal</h3>
						</div>
					</div>
				</div>
				<div class="form-left">
					<router-link to="/" class="return-btn">
						<img src="images/icons/bx-left-arrow-circle.svg" alt="Back to home">
					</router-link>
					<div class="middle">
						<h4 class="text-center">Sign Up</h4>
						<p class="text-center">Welcome to Bizpotta, sign-up to get started.</p>
					</div>
					<form @submit.prevent="submitForm()" class="signin-form signup">
						<div class="row">
							<div class="col-lg-6">
								<div class="form-input">
									<i class="fa fa-user onset-icon" aria-hidden="true"></i>
									<input type="text" name="firstname" placeholder="John" v-model="payload.first_name" />
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-input">
									<i class="fa fa-user onset-icon" aria-hidden="true"></i>
									<input type="text" name="lastname" placeholder="Doe" v-model="payload.last_name" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12">
								<div class="form-input">
									<i class="fa fa-envelope inset-icon" aria-hidden="true"></i>
									<input type="email" name="email" class="email" placeholder="john.doe@gmail.com" v-model="payload.email" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6">
								<div class="form-input">
									<i class="fa fa-mobile inset-icon" aria-hidden="true"></i>
									<input type="text" name="phone" placeholder="081XXXXXXXX" v-model="payload.phone" />
								</div>
							</div>
							<div class="col-lg-6">
								<div class="form-input">
									<i class="fa fa-lock onset-icon" aria-hidden="true"></i>
									<input :type="revealPassword ? 'text' : 'password'" name="password" placeholder="Password..." v-model="payload.password" />
									<i class="fa" :class="[ revealPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true" @click="revealPassword = !revealPassword"></i>
								</div>
							</div>
						</div>
						<button class="btn" type="submit" :disabled="loading">{{ loading ? 'Please wait...' : 'Sign Up' }}</button>
					</form>
					<div class="alt-login-btn">
						<div class="strike">
							<span>Or</span>
						 </div>
						<button class="btn google">
							<img src="images/icons/google-logo.svg" alt="">
							Sign In with Google
						</button>
						<button class="btn facebook">
							<img src="images/icons/facebook-logo.svg" alt="">
							Sign In with Facebook
						</button>
					</div>
					<div class="copy-right text-center">
						<p>
							Already have an account? &nbsp; <router-link to="/login" class="return-btn">Sign In Instead</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService"
import { mapState } from "vuex";
export default {
    name: "Register",
    components: {},
	computed: {
        ...mapState(['loading', 'isUserLoggedIn'])
    },
    created() {
        if (this.isUserLoggedIn) {
            this.$router.push({
                name: "Dashboard",
            })
        }
    },
    data () {
        return {
            payload: {},
			revealPassword: false
        }
    },
	methods: {
		submitForm() {
			if (this.validateSubmit()) {
				this.revealPassword = false
				this.$store.dispatch('setLoading', true)
				AuthenticationService.register(this.payload)
					.then((result) => {
						if (result.data.status == 'success') {
							this.$store.dispatch("login", result.data.data)
							this.$router.push({
								name: "Dashboard"
							})
						}
					})
					.catch((err) => {
						if (err.response === undefined) {
							this.showAlert("Oops! took long to get a response", "Network error")
						} else {
							this.showAlert(err.response.data.message, "Authorization error")
						}
					})
					.finally(() => {
						this.$store.dispatch("setLoading", false)
					})
			}
		},
		validateSubmit() {
			if (this.payload.first_name) {
				if (this.payload.last_name) {
					if (this.payload.email) {
						if (this.payload.phone) {
							if(this.payload.phone.length === 11) {
								if (this.payload.password) {
									return true
								} else {
									this.showAlert("Password is required")
								}
							} else {
								this.showAlert("Phone number must be 11 characters")
							}
						} else {
							this.showAlert("Phone number is required")
						}
					} else {
						this.showAlert("Email address is required")
					}
				} else {
					this.showAlert("Last name is required")
				}
			} else {
				this.showAlert("First name is required")
			}
		},
		showAlert(text, title, type) {
			this.$fire({
				title: title ? title : "Validation error",
				text,
				type: type ? type : "error"
			})
		}
	}
}
</script>
<style scoped>

</style>