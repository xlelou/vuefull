<template>
	<div class="feedback">
		<div class="avatar">
			<img src="static/avatar.jpg" width="40px" height="40px">
		</div>
		<div class="content-wrapper">
			<span class="content">{{content}}</span>
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
	.feedback
		display flex
		.avatar
			flex 0 0 40px
			height 40px
		.content-wrapper
			flex 1
			margin-left 10px
			margin-right 20%
			line-height 20px
			.content
				background lightgray
				display inline-block
				min-height 40px
				font-size 10px
				padding-left 5px
				padding-right 5px
				word-break break-all
</style>