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
						<h4 class="text-center">Sign In</h4>
						<p class="text-center">Welcome back, sign-in to continue</p>
					</div>
					<form  class="signin-form signup" @submit.prevent="loginUser()">
						<div class="row">
							<div class="col-lg-12">
								<div class="form-input">
									<i class="fa fa-envelope inset-icon" aria-hidden="true"></i>
									<input type="email" name="email" placeholder="john.doe@gmail.com" v-model="payload.email" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12">
								<div class="form-input">
									<i class="fa fa-lock inset-icon" aria-hidden="true"></i>
									<input :type="revealPassword ? 'text' : 'password'" name="password" placeholder="password..." v-model="payload.password" />
									<i class="fa" :class="[ revealPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true" @click="revealPassword = !revealPassword"></i>
								</div>
							</div>
						</div>
						<label class="container">
							Remember me
							<input type="checkbox" />
							<span class="checkmark"></span>
						</label>
						<button class="btn" type="submit" :disabled="loading">{{ loading ? "Please wait..." : "Sign In" }}</button>
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
							Don’t have an account yet? <router-link to="/register" style="color: rgba(19, 17, 79, 1)">Sign Up</router-link>
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
    name: "Login",
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
            payload: {
                email: '',
                password: ''
            },
			revealPassword: false
        }
    },
	methods: {
		validateLogin() {
            if (this.payload.email) {
                if (this.payload.password) {
                    if (this.payload.password.length >= 6) {
                        return true
                    } else {
                        this.showAlert("Password length must be greater than 6 character")
                    }
                } else {
                    this.showAlert("Password is required")
                }
            } else {
                this.showAlert("Email is required")
            }
        },
        loginUser() {
            if(this.validateLogin()) {
				this.revealPassword = false
                this.$store.dispatch('setLoading', true)
                AuthenticationService.login(this.payload)
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
						this.$store.dispatch('setLoading', false)
					})
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