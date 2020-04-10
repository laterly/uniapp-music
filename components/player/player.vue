<template>
	<view class="player">
		<view class="player-bottom" @tap="clickTo">
			<progress :percent="timeData.timeRange" activeColor="#23E379" stroke-width="3" />
			<view class="player-bottom-box">
				<view class="player-left">
					<image :src="nowPlayList.album_img?nowPlayList.album_img.replace('{size}', imgSizes):''" mode="widthFix" class="pic"></image>
					<view class="title">
						<view class="name">
							{{nowPlayList.songName||'因心乐而心悦'}}
						</view>
						<view class="des">
							{{nowPlayList.singerName||'在这里找到属于自己的音乐'}}
						</view>
					</view>
				</view>
				<view class="player-right">
					<text class="iconfont player-icon icon-shoucang" @tap.stop="loveSong"></text>
					<text class="iconfont player-icon player-icon-play icon-icon_bofang" v-if="isPlay==2" @tap.stop="pausePlay"></text>
					<text class="iconfont player-icon player-icon-play icon-iconset0481" v-else @tap.stop="startPlay"></text>
					<text class="iconfont player-icon icon-caidangongneng"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	import { isEmptyObject,addZero } from '@/utils/lib.js'
	export default {
		computed:{
			...mapState(['nowPlayList','imgSize','isPlay','AudioContext','timeData'])
		},
		data() {
			return {
				duration: '100',
				currentTime: 0,
				chDuration: ['0', '00'],
				chCurrentTime: ['0', '00'],
				// AudioContext:null,
				timeRange:0,
				imgSizes:120
			}
		},
		mounted(){
			this.initAudio();
		},
		watch:{
			isPlay(newVal,oldVal){
				console.log('isPlaynewVal',newVal);
				console.log('isPlayoldVal',oldVal);
				//是否正在播放,2是要播放，1是要暂停，0是还没有歌曲
				this.playMusic();
			},
			nowPlayList(newVal,oldVal){
				console.log('nowPlayListnewVal',newVal);
				console.log('nowPlayListoldVal',oldVal);
				if(!isEmptyObject(oldVal)&&newVal.albumid!=oldVal.albumid){
					this.playMusic();
				}
			}
		},
		methods: {
			initAudio(){
				// this.AudioContext = uni.createInnerAudioContext();
				// this.AudioContext.autoplay = false;
				this.$store.commit('setAudioContext');
				this.AudioContext.onTimeUpdate(res=>{
					this.currentTime=this.AudioContext.currentTime;
					let newTime = parseInt(this.AudioContext.currentTime);
					let songTimeLength = parseInt(this.nowPlayList.timeLength);
					let per = 100;
					let newRange=parseInt((newTime*100)/songTimeLength);
					this.timeRange=newRange;
					let duration = this.AudioContext.duration;
					let currentTime = this.AudioContext.currentTime;
					this.chDuration[0] = Math.floor(Math.floor(duration)/60);
					this.chDuration[1] = addZero(Math.floor(duration)%60);
					this.chCurrentTime[0] = Math.floor(Math.floor(currentTime)/60);
					this.chCurrentTime[1] = addZero(Math.floor(currentTime)%60);
					let obj={
						chDuration:this.chDuration,
						chCurrentTime:this.chCurrentTime,
						timeRange:this.timeRange
					}
					this.$store.commit('setTimeData',obj)
				})
			},
			playMusic(){
				console.log('playMusic');
				if(this.AudioContext.src!=this.nowPlayList.url)
					this.AudioContext.src=this.nowPlayList.url;
				switch(this.isPlay){
				     case 1:
					    this.AudioContext.pause();
				       break;
				     case 2:
						this.AudioContext.play();
				     break;
				}
			},
			startPlay(){
				console.log('start');
				if(isEmptyObject(this.nowPlayList)) return;
				this.$store.commit('setIsPlay',2);
			},
			pausePlay(){
				 console.log('start');
				 if(isEmptyObject(this.nowPlayList)) return;
				 this.$store.commit('setIsPlay',1);
			},
			getSongDetails(item){
				//获取现在正在播放的歌曲
				this.$store.dispatch('getSongDetailsData',item).then((res)=>{
					 
				});
			},
			clickTo() {
				this.path.navigateTo('../../pages/lyrics/lyrics')
			},
			loveSong() {
				
			}
		}
	}
</script>

<style lang="stylus">
	.player {
		.player-bottom {
			width 100%;
			height 104upx;
			position fixed;
			left 0;
			bottom 0;
			box-sizing border-box;
			display flex;
			flex-direction column;
			.player-bottom-box{
				background #FFFFFF;
				display flex;
				align-items center;
				justify-content space-between;
				flex 1;
				padding 0 33upx;
			}
			.player-left {
				display flex;
				align-items center;

				.pic {
					width: 60upx;
					height: 60upx;
					border-radius: 100%;
				}

				.title {
					display flex;
					flex-direction column;
					margin-left 28upx;
					justify-content center;
					width 100%;
					overflow hidden;
					white-space nowrap;
					text-overflow ellipsis;
					.name {
						font-size: 26upx;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						margin-top -5upx;
					}

					.des {
						font-size: 22upx;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
						margin-top -5upx;
					}
				}
			}

			.player-right {
				display flex;
				align-items center;
				justify-content flex-end;

				.player-icon {
					font-size 60upx;
					color #757575;
					margin-left 36upx;

					&:nth-child(1) {
						margin-left 0;
					}
				}

				.player-icon-play {
					color #23E379;
				}
			}
		}
	}
</style>
