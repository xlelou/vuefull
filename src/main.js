import Vue from 'vue'
import App from './App'


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Home from 'components/Home'
import Login from 'components/Login'
import Profile from 'components/profile/Profile'
import Session from 'components/session/Session'
// 配置路由规则
const router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: Home,
			children: [{
				path: '/home/profile',
				component: Profile
			},
			{
				path: '/home/session',
				component: Session
			}]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/',
			redirect: '/login'
		}
	],
	linkActiveClass: 'active'
})

router.beforeEach(({meta, path}, from, next) => {
	console.log(path)
	next()
})

new Vue({
	router
}).$mount('#app')
