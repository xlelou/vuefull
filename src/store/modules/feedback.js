import robotApi from 'api/robotApi'

import * as FEEDBACK from '../actionType/feedbackType'

const state = {
	feedbackContent: {}
}

const getters = {
  feedbackContent: state => state.feedbackContent
}

const actions = {
	requestFeedback({commit, state, rootState}, param) {
		console.log('actions')
		rootState.requesting = true
		commit(FEEDBACK.ROBOT_FEEDBACK_REQUEST)
		robotApi.getFeedback(param).then(
			(response) => {
				console.log(response + '000000')
				rootState.requesting = false
				commit(FEEDBACK.ROBOT_FEEDBACK_SUCCESS, response)
			}, 
			(error) => {
				rootState.requesting = false
				rootState.error = error
				commit(FEEDBACK.ROBOT_FEEDBACK_FAILURE, error)
			}
		)
	}
}

const mutations = {
	//列表
	[FEEDBACK.ROBOT_FEEDBACK_REQUEST] (state) {

	},
	[FEEDBACK.ROBOT_FEEDBACK_SUCCESS] (state, feedbackContent) {
		state.feedbackContent = feedbackContent
	},
	[FEEDBACK.ROBOT_FEEDBACK_FAILURE] (state, error) {

	}
}

export default {
  state,
  getters,
  actions,
  mutations
}