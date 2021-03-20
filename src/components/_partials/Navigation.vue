<template>
    <!--Start Header -->
	<header class="nav-bg-w main-header navfix fixed-top menu-white header-pr">
		<div class="container-fluid m-pad">
			<div class="menu-header">
				<div class="dsk-logo">
					<a class="nav-brand" href="index.html">
						<img src="images/logo-white.svg" alt="Logo" class="mega-white-logo" />
						<img src="images/logo.png" alt="Logo" class="mega-darks-logo" />
					</a>
				</div>
				<div class="custom-nav" role="navigation">
					<ul class="nav-list">
						<li class="sbmenu active">
                            <router-link to="/" class="menu-links">Home</router-link>
						</li>
						<li class="sbmenu">
                            <router-link to="/about" class="menu-links">About</router-link>
						</li>
						<li class="sbmenu">
                            <router-link to="/hub" class="menu-links">Hub</router-link>
						</li>
						<li class="sbmenu">
                            <router-link to="/learning" class="menu-links">Learning</router-link>
						</li>
						<li class="sbmenu">
                            <router-link to="/funds" class="menu-links">Funds</router-link>
						</li>
						<li class="sbmenu">
                            <router-link to="/contact" class="menu-links">Contact us</router-link>
						</li>
						<li class="header">
                            <router-link to="/login" class="menu-links">Sign In</router-link>
                            <router-link to="/register" class="menu-links btn btn-download-now-black">Sign Up</router-link>
						</li>
					</ul>
				</div>
				<div class="mobile-menu2">
					<ul class="mob-nav2">
						<li class="navm-">
							<a class="toggle" href="#">
								<span></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!--Mobile Menu-->
			<nav id="main-nav">
				<ul class="first-nav">
					<li>
                        <router-link to="/">Home</router-link>
					</li>
					<li>
                        <router-link to="/about">About</router-link>
					</li>
					<li>
                        <router-link to="/hub">Hub</router-link>
					</li>
					<li>
                        <router-link to="/learning">Learning</router-link>
					</li>
					<li>
                        <router-link to="/funds">Funds</router-link>
					</li>
					<li>
                        <router-link to="/contact">Contact us</router-link>
					</li>
					<li>
                        <router-link to="/login">Sign In</router-link>
					</li>
					<li>
                        <router-link to="/register">Sign Up</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<!--End Header -->
</template>
<script>
export default {
    name: "Navigation",
    components: {}
}
</script>
<style scoped>

</style>