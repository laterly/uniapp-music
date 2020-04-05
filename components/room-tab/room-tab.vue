<template>
	<view class="room-tab">
		<view class="room-tab-bar">
			<image :src="require('../../images/index/song.png')" mode="widthFix" class="room-image" lazy-load></image>
			<text class="room-text">
				私人电台
			</text>
		</view>
		<view class="room-tab-bar" style="background: url(../../images/index/menu.png);">
			<image src="../../images/index/song.png" mode="widthFix" class="room-image" lazy-load></image>
			<text class="room-text">
				私人电台
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				}
		},
		methods: {
	
		}
	}
</script>

<style lang="stylus" scoped>
	.room-tab{
		display flex;
		box-sizing border-box;
		padding 0 80upx;
		justify-content space-between;
	}
	.room-tab-bar{
		display flex;
		flex-direction column;
		align-items center;
		justify-content center;
		.room-image{
			width 52px;
			height auto;
		}
		.room-text{
			font-size 25upx;
			color #8e8e8e;
			margin-top 10upx;
		}
	}
	
</style>
