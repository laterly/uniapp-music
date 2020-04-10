<template>
	<view class="movie">
		<tab-bar-base :tabBars="tabBars" :center="true">
			<view class="" slot="list0">
				<movieList></movieList>
			</view>
			<view class="" slot="list1">
				<movieList></movieList>
			</view>
		</tab-bar-base>
	</view>
</template>

<script>
	import tabBarBase from '@/components/tab-bar-base/tab-bar-base.vue'
	import movieList from '@/components/movie-list/movie-list.vue'
	export default {
		components: {
			movieList,
			tabBarBase
		},
		data() {
			return {
				tabBars: [{
						name: '最新',
						id: 1
					},
					{
						name: '最热',
						id: 2
					}
				]
			};
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.uni-tab-box{
		
	}

</style>
