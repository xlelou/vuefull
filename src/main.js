import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)


import App from './App'
import store from './store'
import router from './routers'
new Vue({
	router,
	store
}).$mount('#app')
