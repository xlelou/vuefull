import robotApi from 'api/robotApi'

import * as FEEDBACK from '../actionType/feedbackType'

const state = {
	sessionContent: [] // 0:自己会话  1:机器人的回复
}

const getters = {
  sessionContent: state => state.sessionContent
}

const actions = {
	requestFeedback({commit, state, rootState}, param) {
		rootState.requesting = true
		commit(FEEDBACK.ROBOT_FEEDBACK_REQUEST)
		robotApi.getFeedback(param).then(
			(response) => {
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
	[FEEDBACK.ROBOT_FEEDBACK_SUCCESS] (state, sessionContent) {
		console.log(sessionContent.result+ '---------')
		if (sessionContent.error_code === 0) { //机器人的回复
			console.log('机器人的回复')
			state.sessionContent.push({
				type: 1,
				content: sessionContent.result.text
			})
		} else {
			state.sessionContent.push({
				type: 0,
				content: sessionContent
			})
		}
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