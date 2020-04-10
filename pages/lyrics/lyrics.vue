<template>
	<view class="lyrics">
		<uni-nav-bar left-icon="arrowleft" :statusBar="true" @clickLeft="back" class="top-bar">
			<view class="bar-text">
				<view class="bar-title">
					{{nowPlayList.songName||'因心乐而心悦'}}
				</view>
				<view class="bar-des">
					{{nowPlayList.singerName||'在这里找到属于自己的音乐'}}
				</view>
			</view>
		</uni-nav-bar>
		<!--#ifdef H5-->
		<view class="uni-h5-placeholder"></view>
		<!-- #endif -->
		<!--#ifdef MP-WEIXIN-->
		<view class="uni-app-placeholder"></view>
		<!-- #endif -->
		<!--#ifdef APP-PLUS-->
		<view class="uni-app-placeholder"></view>
		<!-- #endif -->
		<view class="lyrics-pic-box">
			<image :src="nowPlayList.imgUrl?nowPlayList.imgUrl.replace('{size}', imgSize):'http://img5.imgtn.bdimg.com/it/u=2375437737,24752006&fm=26&gp=0.jpg'" mode="aspectFill" lazy-load class="lyrics-pic"></image>
		</view>
		<view>
			<scroll-view scroll-y="true" class="lyrics-box">
				<view v-if="isShow">
					<view class="lyrics-text">Tell me your secrets ,show me your felings</view>
					<view class="lyrics-text">Tell me your secrets ,show me your felings</view>
					<view class="lyrics-text">Tell me your secrets ,show me your felings</view>
					<view class="lyrics-text">Tell me your secrets ,show me your felings</view>
				</view>
				<view v-else>
					<view class="lyrics-text">抱歉暂无歌词</view>
				</view>
			</scroll-view>
		</view>
		<player-box></player-box>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import playerBox from '@/components/player/player-box.vue';
	import { mapState } from "vuex";
	import { isEmptyObject } from '@/utils/lib.js'
	export default {
		components: {
			uniNavBar,
			playerBox
		},
		computed:{
			...mapState(['nowPlayList','imgSize'])
		},
		data() {
			return {
				isShow:false
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="stylus">
	.uni-app-placeholder{
		width: 100%;
		height 64px;
	}
	.uni-h5-placeholder{
		width: 100%;
		height 44px;
	}
	.top-bar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height 44px;
	}
	.bar-text{
		display flex;
		flex-direction column;
		align-items center;
		justify-content center;
		text-align center;
		width 100%;
		.bar-title{
			font-size:30upx;
			font-weight:400;
			color:rgba(67,67,67,1);
		}
		.bar-des{
			font-size:24upx;
			font-weight:400;
			color:rgba(117,117,117,0.7);
		}
	}
	.lyrics-pic-box{
		display flex;
		justify-content center;
		margin-top 66upx;
		.lyrics-pic{
			width:486upx;
			height:486upx;
			border-radius:50%;
			box-shadow: 0 0 15px #7D8F9B;
		}
	}
	.lyrics-box{
		margin-top 60upx;
		height 230upx;
		position relative;
		.lyrics-text{
			font-size:26upx;
			font-weight:400;
			color:rgba(67,67,67,1);
			text-align center;
			margin-top 10upx;
		}
		&::after{
			content '';
			width 100%;
			height 220upx;
			bottom 0;
			left 0;
			position absolute;
			background-image linear-gradient(to bottom,rgba(255,255,225,0),rgba(255,255,255,1));
		}
	}
	
</style>
