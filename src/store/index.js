// 组装模块并导出store

import Vue from 'vue'
import Vuex from 'vuex'

import feedback from 'modules/feedback'


Vue.use(Vuex)

const state = {
	requesting: false,
	error: {}
}

const getters = {
	requesting: state => state.requesting,
	error: state => state.error
}

export default new Vuex.Store({
	state,
  getters,
	modules: {
		feedback
	}
})
