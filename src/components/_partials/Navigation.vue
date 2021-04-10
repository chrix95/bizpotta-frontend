<template>
    <!--Start Header -->
	<header class="nav-bg-w main-header navfix fixed-top menu-white header-pr">
		<div class="container-fluid m-pad">
			<div class="menu-header">
				<div class="dsk-logo">
					<router-link to="/" class="nav-brand" >
						<img src="images/logo-light.svg" alt="Logo" class="mega-darks-logo" v-if="scrollPos < 75"/>
						<img src="images/logo.png" alt="Logo" class="mega-darks-logo" v-else />
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
                            <router-link to="/login" class="menu-links" :class="[currentRoute !== 'Home' ? 'subpageLinkColor' : '']" style="color: rgba(148, 242, 54, 1)">Sign In</router-link>
                            <router-link to="/register" class="menu-links btn btn-download-now-black" style="color: #000 !important; font-weight: bold">Sign Up</router-link>
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
		setInterval(() => {
			this.scrollPos = this.$window.scrollY
		}, 10);
	},
	data() {
		return {
			scrollPos: 0
		}
	}
}
</script>
<style scoped>
.subpageColor {
	color: #000 !important;
}
.subpageLinkColor {
	color: rgba(19, 17, 79, 1) !important;
}
</style>