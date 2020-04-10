<template>
	<view class="room-cell" @click="nextClick">
		<view class="title">
			{{title}}
		</view>
		<view class="more">查看更多<text class="iconfont icon-tubiao-"></text></view>
	</view>
</template>

<script>
	export default {
		props: {
			title:{
				type:String,
				default:''
			}
		},
		data() {
			return {
			}
		},
		methods: {
			nextClick(){
				this.$emit('onClick')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.room-cell{
		display flex;
		justify-content space-between;
		padding 0 30upx;
		box-sizing border-box;
		align-items center;
		margin-top 10upx;
		margin-bottom 10upx;
		.title{
			font-weight: bold;
			font-size: 38upx;
			color #434343;
		}
		.more{
			font-size 25upx;
			color #8e8e8e;
		}
	}
</style>
