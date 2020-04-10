<template>
	<view class="room-tab">
		<view class="room-tab-bar" v-for="(tab,index) in tabList" :key="index" @tap="clickTo(tab.id)">
			<image :src="tab.img" mode="widthFix" class="room-image" lazy-load :style="'width:'+tab.width+'px'"></image>
			<text class="room-text">
				{{tab.des}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				tabList: [{
						id: 1,
						img: '../../static/imgs/index/song.png',
						width: 44,
						des: '私人电台'
					},
					{
						id: 2,
						img: '../../static/imgs/index/menu.png',
						width: 38,
						des: '音乐歌单'
					},
					{
						id: 3,
						img: '../../static/imgs/index/singer.png',
						width: 51,
						des: '音乐MV'
					},
					{
						id: 4,
						img: '../../static/imgs/index/rank.png',
						width: 42,
						des: '排行榜'
					}
				]
			}
		},
		methods: {
			clickTo(id) {
				switch (id) {
					case 1:
						this.path.navigateTo('../../pages/station/station');
						break;
					case 2:
						this.path.navigateTo('../../pages/sheet/sheet');
						break;
					case 3:
						this.path.navigateTo('../../pages/movie/movie');
						break;
					default:
						this.path.navigateTo('../../pages/rank/rank');
						break;
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.room-tab {
		display flex;
		box-sizing border-box;
		padding 0 80upx;
		justify-content space-between;
	}

	.room-tab-bar {
		display flex;
		flex-direction column;
		align-items center;
		justify-content center;

		.room-image {
			height auto;
		}

		.room-text {
			font-size 25upx;
			color #434343;
			margin-top 10upx;
		}
	}
</style>
