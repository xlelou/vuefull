<template>
	<div class="session">
		<div class="input-wrapper">
			<input name="" class="msg-input" v-model="content">
			<span class="msg-send" @click="send">发送</span>
		</div>
		<div class="session-wrapper" v-for="content in allContent">
			<Feedback :content="content.content" v-if="content.type==0"></Feedback>
			<div style="height: 10px"></div>
			<RevFeedback :content="content.content" v-if="content.type==1"></RevFeedback>
		</div>
	</div>
</template>

<script>
import Feedback from './Feedback.vue'
import RevFeedback from './RevFeedback.vue'
export default {
	data() {
		return {
			content: "",
			allContent: [{type: 0, content: '2016年6月21日 - vuejsLearn--- v-for列表渲染 Vue.js是一个构建数据驱动的web界面的库。Vue.js 的核心是一个响应的数据绑定系统,它让数据与DOM保持同步非常简单如下列表展示'}]
		}
	},
	components: {
		Feedback,
		RevFeedback
	},
	methods: {
		send() {
			if (this.content !== '') {
				this.allContent.push({
					type: 1,
					content: this.content
				})
				this.content = ''
			}
		}
	}
}
</script>

<style lang="stylus">
	.session
		margin-bottom 49px
		vertical-align middle
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
		.session-wrapper
			margin-top 40px
</style>