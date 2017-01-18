<template>
	<div class="revfeedback">
		<div class="content-wrapper">
			<span class="content">{{content}}</span>
		</div>
		<div class="avatar">
			<img src="static/avatar.jpg" width="40px" height="40px">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		content: {
			type: String
		}
	}
}
</script>

<style lang="stylus">
	.revfeedback
		display flex
		.avatar
			flex 0 0 40px
			height 40px
		.content-wrapper
			flex 1
			margin-right 10px
			margin-left 20%
			line-height 10px
			padding 5px
			.content
				float right
				font-size 10px
				background lightgray
				padding 5px
</style>