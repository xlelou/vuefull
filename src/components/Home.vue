<template>
	<div class="home">
		<div class="tabbar">
			<div class="tabbar-item">
  			<router-link to="/home/session">会话</router-link>
  		</div>
  		<div class="tabbar-item">
  			<router-link to="/home/profile">我的</router-link>
  		</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	created() {
		this.$router.replace('/home/session')
	}
}
</script>

<style lang="stylus">
	.home
		.tabbar
			display flex
			width 100%
			height 49px
			line-height 49px
			position fixed
			z-index 100
			background white
			left 0px
			bottom 0px
			.tabbar-item
				flex 1
				text-align center
				& > a
					text-decoration none
					display block
					color rgb(77, 85, 93)
					border-top 1px solid rgba(7, 17, 27, 0.1)
					&.active
						color rgb(240, 20, 20)
</style>