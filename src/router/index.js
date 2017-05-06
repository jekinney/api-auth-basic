import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
	linkActiveClass: 'is-active',
  	routes: [
    	{
      		path: '/',
      		name: 'Home',
      		component: Home,
      		meta: {
	            guest: true,
	            needsAuth: false
	        }
    	}
  	]
})

export default router
