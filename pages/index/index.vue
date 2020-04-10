<template>
	<view class="content">
		<header-nav-bar></header-nav-bar>
		<tab-bar></tab-bar>
		<player></player>
	</view>
</template>

<script>
	import headerNavBar from '@/components/header-nav-bar/header-nav-bar.vue';
	import tabBar from '@/components/tab-bar/tab-bar.vue';
	import player from '@/components/player/player.vue';
	export default {
		components: {
			headerNavBar,
			tabBar,
			player
		},
		computed: {
		    
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.$store.dispatch('getNewSongsData');//获取新歌列表数据
			
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
