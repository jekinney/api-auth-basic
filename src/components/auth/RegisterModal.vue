<template>
		<div class="modal" :class="{ 'is-active': showRegisterModal }">
	  	<div class="modal-background"></div>
	  	<div class="modal-card">
		    <header class="modal-card-head">
		      	<p class="modal-card-title">Register a new account</p>
		      	<button @click="close" class="delete"></button>
		    </header>
		    <section class="modal-card-body">
		    	<div class="field">
		    		<label for="name" class="label">Name</label>
		    		<p class="control">
		    			<input type="text" v-model="user.name" id="name" class="input">
		    		</p>
		    	</div>
		    	<div class="field">
		    		<label for="email" class="label">Email</label>
		    		<p class="control">
		    			<input type="email" v-model="user.email" id="email" class="input">
		    		</p>
		    	</div>
		    	<div class="field">
		    		<label for="password" class="label">Password</label>
		    		<p class="control">
		    			<input type="password" v-model="user.password" id="password" class="input">
		    		</p>
		    	</div>
		    	<div class="field">
		    		<label for="password_confirmation" class="label">Confirm Password</label>
		    		<p class="control">
		    			<input type="password" v-model="user.password_confirmation" id="password_confirmation" class="input">
		    		</p>
		    	</div>
		    </section>
		    <footer class="modal-card-foot">
		    	<button @click="close" class="button">Cancel</button>
		      	<button @click="submit" class="button is-success">Register</button>
		    </footer>
	  	</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'register',
		data () {
			return {
				user: {
					name: '',
					email: '',
					password: '',
					password_confirmation: ''
				},
				errors: {
					name: null,
					email: null,
					password: null
				}
			}
		},
		computed: mapGetters([
			'showRegisterModal'
		]),
		methods: {
			...mapActions([
				'postRegister',
				'toggleRegisterModal'
			]),
			submit () {
				this.postRegister(this.user).then( () => {
					this.close()
				}).catch( errors => {
					this.errors = errors
					this.user.password = ''
					this.user.password_confirmation = ''
				})
			},
			close () {
				this.resetUser()
				this.toggleRegisterModal()
			},
			resetUser () {
				this.errors = {
					name: null,
					email: null,
					password: null
				}
				return this.user = {
					name: '',
					email: '',
					password: '',
					password_confirmation: ''
				}
			}
		}
	}
</script>