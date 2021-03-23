<template>
    <!--Start Header -->
	<header class="nav-bg-w main-header navfix fixed-top menu-white header-pr">
		<div class="container-fluid m-pad">
			<div class="menu-header">
				<div class="dsk-logo">
					<router-link to="/" class="nav-brand" >
						<img src="images/logo-white.svg" alt="Logo" class="mega-white-logo" />
						<img src="images/logo.png" alt="Logo" class="mega-darks-logo" />
					</router-link>
				</div>
				<div class="custom-nav" role="navigation">
					<ul class="nav-list">
						<li class="sbmenu" :class="[currentRoute === 'About' ? 'active' : '']">
                            <router-link to="/about" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageColor' : '']">About</router-link>
						</li>
						<li class="sbmenu" :class="[currentRoute === 'Hub' ? 'active' : '']">
                            <router-link to="/hub" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageColor' : '']">Hub</router-link>
						</li>
						<li class="sbmenu" :class="[currentRoute === 'Learning' ? 'active' : '']">
                            <router-link to="/learning" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageColor' : '']">Learning</router-link>
						</li>
						<li class="sbmenu" :class="[currentRoute === 'Funds' ? 'active' : '']">
                            <router-link to="/funds" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageColor' : '']">Funds</router-link>
						</li>
						<li class="sbmenu" :class="[currentRoute === 'Contact' ? 'active' : '']">
                            <router-link to="/contact" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageColor' : '']">Contact us</router-link>
						</li>
						<li class="header">
                            <router-link to="/login" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageLinkColor' : '']">Sign In</router-link>
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
    components: {},
	computed: {
		currentRoute() {
			return this.$route.name
		}
	},
	mounted() {
	},
	data() {
		return {}
	}
}
</script>
<style scoped>
.subpageColor {
	color: #000 !important;
}
.subpageLinkColor {
	color: #517fd9 !important;
}
</style>