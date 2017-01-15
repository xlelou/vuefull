<template>
	<div class="login">
		<span @click="login">asdjlaksdjklasjd lkasjdlkjas</span>
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

</style>