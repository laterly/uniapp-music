<template>
	<view class="life-con">
		<view class="life-list" v-for="(life,index) in lifeList" :key="index">
			<view class="life-img-box">
			<image v-if="life.img" :src="life.img" mode="widthFix" class="life-list-img" lazy-load></image>
			<view class="life-play-icon">
				<text class="play-icon iconfont icon-bofang"></text>
			</view>
			</view>
			<view class="life-title">
				Trouble I´m you
			</view>
			
			<view class="life-text">{{life.content}}</view>
			<view class="life-icon-box">
				<view class="love">
					<text class="love-icon iconfont icon-shoucang"></text>{{life.love}}
				</view>
				<view class="msg">
					<text class="msg-icon iconfont icon-icon_fuben"></text>{{life.msg}}
				</view>
				<view class="msg">
					<text class="msg-icon iconfont icon-fenxiang1"></text>{{life.msg}}
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
						img: 'http://img5.imgtn.bdimg.com/it/u=2375437737,24752006&fm=26&gp=0.jpg',
						content: '一个人，一边品着咖啡，一边张望窗外的风景发呆',
						love: 23165,
						msg: 31374
					},
					{
						img: 'http://img0.imgtn.bdimg.com/it/u=1825967804,4062369026&fm=26&gp=0.jpg',
						content: '多少人因为这首歌而哭泣',
						love: 20155,
						msg: 32044
					},
					{
						img: 'http://img3.imgtn.bdimg.com/it/u=2600355599,2839798490&fm=26&gp=0.jpg',
						content: '单纯的小美好',
						love: 20125,
						msg: 32544
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
	.life-img-box{
		position relative;
	}
	.life-play-icon{
		position absolute;
		width:120upx;
		height:120upx;
		background:rgba(0,0,0,0.2);
		border-radius:50%;
		left 50%;
		top 50%;
		transform translate(-50%,-50%);
		display flex;
		align-items center;
		justify-content center;
		.play-icon{
			font-size 60upx;
			color #FFFFFF;
		}
	}
	.life-title{
		font-size:29upx;
		font-weight:400;
		color:rgba(51,51,51,1);
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
