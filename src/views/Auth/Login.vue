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
					<form action="#" method="post" class="signin-form">
						<div class="row">
							<div class="col-lg-12">
								<div class="form-input">
									<i class="fa fa-envelope inset-icon" aria-hidden="true"></i>
									<input type="email" name="email" placeholder="Email Address" required />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12">
								<div class="form-input">
									<i class="fa fa-lock inset-icon" aria-hidden="true"></i>
									<input type="password" name="password" placeholder="Password" required />
									<i class="fa fa-eye-slash" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<label class="container">
							Remember me
							<input type="checkbox" />
							<span class="checkmark"></span>
						</label>
						<button class="btn">Sign In</button>
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
export default {
    name: "Login",
    components: {}
}
</script>
<style scoped>

</style>