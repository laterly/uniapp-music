<template>
	<view class="rank">
		<rank-list :details="rankData" @onClick="clickTo"></rank-list>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	import rankList from '@/components/rank-list/rank-list.vue'
	export default {
		components: {
			rankList
		},
		computed:{
			...mapState(['rankData'])
		},
		data() {
			return {
				
			}
		},
		onLoad(){
			this.$store.dispatch('getRankData');//获取排行榜列表
		},
		methods: {
			clickTo(item){
				this.path.navigateTo('../rank-detail/rank-detail',{ rankid: item.rankid })
			}
		}
	}
</script>

<style lang="stylus">

</style>
