<template>
	<div class="session">
		<div class="input-wrapper">
			<input name="" class="msg-input" v-model="selfcontent">
			<span class="msg-send" @click="send">发送</span>
		</div>
		<div class="session-wrapper" v-for="content in sessionContent">
			<Feedback :content="content.content" v-if="content.type==0"></Feedback>
			<RevFeedback :content="content.content" v-if="content.type==1"></RevFeedback>
		</div>
	</div>
</template>

<script>
import Feedback from './Feedback.vue'
import RevFeedback from './RevFeedback.vue'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			selfcontent: ""
		}
	},
	computed: {
    ...mapGetters([
      'requesting',
      'sessionContent',
      'error'
  	])
  },
	components: {
		Feedback,
		RevFeedback
	},
	methods: {
		send() {
			if (this.selfcontent) {
				console.log( this.selfcontent + ']]]]]]]]]]')
			  this.$store.commit('ROBOT_FEEDBACK_SUCCESS', this.selfcontent)
				this.$store.dispatch('requestFeedback', this.selfcontent)

				this.selfcontent = ''
			}
		// 	this.$http.get('/robotfeedback').then((response) => {
		// 		console.log('response=' + JSON.stringify(response.body))
  //   // success callback
  // }, (response) => {
  //   // error callback
  // });
			// if (this.content !== '') {
			// 	console.log('send')
		

			// }
		}
	}
}
</script>

<style lang="stylus">
	.session
		margin-bottom 49px
		vertical-align middle
		margin-top 40px
		.input-wrapper
			position fixed
			top 0px
			width 100%
			height 30px
			line-height 30px
			margin-bottom 10px
			background white
			.msg-input
				border 1px solid black
				width 70%
				height 100%
			.msg-send
				display inline-block
				width 20%
				height 100%
				text-align center
				background green
</style>