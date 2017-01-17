import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homeRouter from './homeRouter.js'

import Login from 'components/Login'
import Home from 'components/Home'

const routes = [
	{
		path: '/home',
		component: Home,
		children: homeRouter
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/',
		redirect: '/login'
	}
]
// 配置路由规则
const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
})

router.beforeEach(({meta, path}, from, next) => {
	console.log(path)
	next()
})

export default router