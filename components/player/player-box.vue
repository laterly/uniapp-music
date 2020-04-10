<template>
	<view class="player-box">
		<view class="box-top">
			<text class="iconfont box-top-icon icon-changyongicon-"></text>
			<text class="iconfont box-top-icon icon-fenxiang1"></text>
			<text class="iconfont box-top-icon icon-icon_fuben"></text>
			<text class="iconfont box-top-icon icon-gengduo-shuxiang"></text>
		</view>
		<view class="box-progress">
			<slider 
			:min="0"
			:max="100"
			:value="timeData.timeRange" 
			@change="sliderChange" 
			block-size="12" 
			backgroundColor="#E3E1E4" 
			block-color="#23E379" 
			activeColor="#23E379" 
			step="5" />
			<view class="progress-time">
				<text class="left-time">{{timeData.chCurrentTime[0]}}:{{timeData.chCurrentTime[1]}}</text>
				<text class="right-time">{{timeData.chDuration[0]}}:{{timeData.chDuration[1]}}</text>
			</view>
		</view>
		<view class="box-player">
			<text class="iconfont icon-xunhuanbofang box-player-left-icon"></text>
			<view class="box-center">
				<text class="iconfont icon-zuiqiankong box-center-left-icon"></text>
				<text class="iconfont icon-zanting box-center-center-icon" v-if="isPlay==2" @tap.stop="pausePlay"></text>
				<text class="iconfont icon-bofang3 box-center-center-icon" v-else @tap.stop="startPlay"></text>
				<text class="iconfont icon-zuihoukong box-center-right-icon"></text>
			</view>
			<text class="iconfont icon-shoucang box-player-right-icon"></text>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	import { isEmptyObject,addZero } from '@/utils/lib.js'
	export default {
		data() {
			return {
	
			}
		},
		computed:{
			...mapState(['nowPlayList','imgSize','isPlay','timeData','AudioContext'])
		},
		methods: {
			startPlay(){
				if(isEmptyObject(this.nowPlayList)) return;
				this.$store.commit('setIsPlay',2);
			},
			pausePlay(){
				 if(isEmptyObject(this.nowPlayList)) return;
				 this.$store.commit('setIsPlay',1);
			},
			sliderChange(e) {
				this.AudioContext.seek(e.detail.value);
				let timeLength=parseInt(this.nowPlayList.timeLength);
				this.AudioContext.currentTime=(e.detail.value*timeLength)/100;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.player-box{
		position fixed;
		width 100%;
		bottom 0;
		left 0;
	}
	.box-top{
		box-sizing border-box;
		padding 0 85upx;
		display flex;
		justify-content space-between;
		.box-top-icon{
			font-size 50upx;
			color #464347;
		}
	}
	.box-progress{
		.progress-time{
			font-size:22upx;
			font-weight:300;
			color:rgba(156,156,156,1);
			display flex;
			justify-content space-between;
			margin-top -30upx;
			.left-time{
				margin-left 35upx; 
			}
			.right-time{
				margin-right 35upx; 
			}
		}
	}
	.box-player{
		display flex;
		justify-content space-around;
		align-items center;
		.box-player-left-icon{
			font-size 50upx;
			color #23E379;
			// margin-right 123upx;
		}
		.box-player-right-icon{
			font-size 50upx;
			color #23E379;
			// margin-left 123upx;
		}
		.box-center{
			display flex;
			justify-content space-around;
			align-items center;
			.box-center-left-icon{
				font-size 50upx;
				color #23E379;
			}
			.box-center-center-icon{
				font-size 120upx;
				color #23E379;
				margin 0 69upx;
			}
			.box-center-right-icon{
				font-size 47upx;
				color #23E379;
			}
		}
	}
</style>
