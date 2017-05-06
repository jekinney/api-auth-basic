<template>
	<nav class="nav container">
		<div class="nav-left">
			<router-link :to="{ name: 'Home' }" class="nav-item" exact>Home</router-link>
		    <a class="nav-item">Documentation</a>
		</div>
		<div v-if="authenticated" class="nav-right nav-menu">
			<a role="button" @click="clearAuth" class="nav-item">{{ user.name }}</a>
		</div>
		<div v-else class="nav-right nav-menu">
			<a role="button" @click="toggleLoginModal" class="nav-item">Login</a>
		    <a role="button" @click="toggleRegisterModal" class="nav-item">Register</a>
		</div>
	</nav>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'headerMenu',
		computed: mapGetters([
			'authenticated',
			'user'
		]),
		methods: mapActions([
			'toggleLoginModal',
			'toggleRegisterModal',
			'clearAuth'
		])
	}
</script>