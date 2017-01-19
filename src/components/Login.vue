<template>
	<div class="login">
		<span @click="login">进入</span>
	</div>
</template>

<script>
	export default {
		methods: {
			login() {
				console.log('hi')
				this.$router.push('/home')
			}
		}
	}
</script>

<style lang="stylus">
	.login
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
</style>