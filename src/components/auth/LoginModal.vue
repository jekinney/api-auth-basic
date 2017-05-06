<template>
	<div class="modal" :class="{ 'is-active': showLoginModal }">
	  	<div class="modal-background"></div>
	  	<div class="modal-card">
		    <header class="modal-card-head">
		      	<p class="modal-card-title">Login to your account</p>
		      	<button @click="close" class="delete"></button>
		    </header>
		    <section class="modal-card-body">
		    	<div class="field">
		    		<label for="email" class="label">Email</label>
		    		<p class="control">
		    			<input type="email" v-model="credentials.email" id="email" class="input">
		    		</p>
		    	</div>
		    	<div class="field">
		    		<label for="password" class="label">Password</label>
		    		<p class="control">
		    			<input type="password" v-model="credentials.password" id="password" class="input">
		    		</p>
		    	</div>
		    </section>
		    <footer class="modal-card-foot">
		    	<button @click="close" class="button">Cancel</button>
		      	<button @click="submit" class="button is-success">Login</button>
		    </footer>
	  	</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'login',
		data () {
			return {
				credentials: {
					email: '',
					password: ''
				},
				errors: null
			}
		},
		computed: mapGetters([
			'showLoginModal'
		]),
		methods: {
			...mapActions([
				'postLogin',
				'toggleLoginModal'
			]),
			submit () {
				this.postLogin(this.credentials).then( () => {
					this.close()
				}).catch( errors => {
					this.errors = errors
					this.credentials.password = ''
				})
			},
			close () {
				this.resetCredentials()
				this.toggleLoginModal()
			},
			resetCredentials () {
				this.errors = null
				return this.credentials = {
					email: '',
					password: ''
				}
			}
		}
	}
</script>