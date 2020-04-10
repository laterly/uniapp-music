<template>
	<view class="life-con">
		<view class="life-list" v-for="(life,index) in lifeList" :key="index">
			<view class="life-box">
				<image :src="life.avatar" mode="widthFix" class="life-img"
				 lazy-load></image>
				<view class="life-right">
					<view class="name">
						{{life.name}}
					</view>
					<view class="time">
						{{life.time}}
					</view>
				</view>
			</view>
			<image v-if="life.img" :src="life.img" mode="widthFix" class="life-list-img" lazy-load></image>
			<view class="life-text">{{life.content}}</view>
			<view class="life-icon-box">
				<view class="love">
					<text class="love-icon iconfont icon-shoucang"></text>{{life.love}}
				</view>
				<view class="msg">
					<text class="msg-icon iconfont icon-icon_fuben"></text>{{life.msg}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				lifeList: [{
						avatar: 'http://img2.imgtn.bdimg.com/it/u=1306607258,967818222&fm=11&gp=0.jpg',
						img: 'http://img5.imgtn.bdimg.com/it/u=2375437737,24752006&fm=26&gp=0.jpg',
						name: '你是我的眼',
						time: '4分钟前',
						content: '一个人，一边品着咖啡，一边张望窗外的风景发呆',
						love: 23165,
						msg: 31374
					},
					{
						avatar: 'http://img5.imgtn.bdimg.com/it/u=2151447830,1807870251&fm=11&gp=0.jpg',
						img: 'http://img0.imgtn.bdimg.com/it/u=1825967804,4062369026&fm=26&gp=0.jpg',
						name: '阳光有点甜',
						time: '10分钟前',
						content: '多少人因为这首歌而哭泣',
						love: 20115,
						msg: 32044
					},
					{
						avatar: 'http://img2.imgtn.bdimg.com/it/u=187078101,4190246037&fm=26&gp=0.jpg',
						img: '',
						name: 'The Rain',
						time: '20分钟前',
						content: 'do you like rain i prefer you',
						love: 20115,
						msg: 32044
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="stylus">
	.life-con {
		box-sizing border-box;
		padding 0 35upx;
	}
	.life-list{
		margin-top 45upx;
	}
	.life-list:nth-child(1){
		margin-top 0;
	}
	.life-box {
		display flex;
		.life-img {
			width 90upx;
			height 90upx;
			border-radius 100%;
		}

		.life-right {
			flex 1;
			display flex;
			flex-direction column;
			justify-content center;
			padding-left 30upx;
			box-sizing border-box;

			.name {
				font-size 30upx;
				color #434343;
			}

			.time {
				font-size 20upx;
				color #9c9c9c;
			}
		}
	}

	.life-list-img {
		width 100%;
		height 147upx;
		margin-top 30upx;
		border-radius 8upx;
	}

	.life-text {
		font-size 27upx;
		color #434343;
		margin-top 15upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.life-icon-box {
		color #9c9c9c;
		font-size 24upx;
		display flex;

		.love-icon {
			margin-right 15upx;
		}

		.msg {
			margin-left 45upx;
		}

		.msg-icon {
			margin-right 15upx;
		}
	}
</style>
