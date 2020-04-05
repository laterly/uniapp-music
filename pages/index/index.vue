<template>
	<view class="content">
		<header-nav-bar></header-nav-bar>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import headerNavBar from '@/components/header-nav-bar/header-nav-bar.vue';
	import tabBar from '@/components/tab-bar/tab-bar.vue';
	export default {
		components: {
			headerNavBar,
			tabBar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="stylus">
	.content{
		box-sizing: border-box;
		height 100%;
	}

</style>
