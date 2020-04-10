<template>
	<view class="song-list-box">
		<view class="song-list" :class="{'active':nowPlayList.albumid==item.album_id}" v-for="(item,index) in songArr" @tap="clickSong(item)" hover-class="main-hover-color" hover-stay-time="100">
			<view class="song-title">
				{{item.filename}}
			</view>
			<view class="song-des">
				{{item.remark||item.singername}}
			</view>
			<text class="more-icon iconfont icon-gengduo-shuxiang"></text>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	import { isEmptyObject } from '@/utils/lib.js'
	export default {
		props:{
			songArr:{
				type: Array,
				default: []
			}
		},
		computed:{
			...mapState(["isPlay","nowPlayList"])
		},
		data() {
			return{
				
			}
		},
		methods:{
			clickSong(item){
				this.$emit('goPlay', item);
				//点集播放列表单曲，判断是要执行什么操作
				//是否正在播放,2是正在播放，1是暂停，0是还没有歌曲
				console.log('this.nowPlayList',this.nowPlayList,item);
				if(isEmptyObject(this.nowPlayList)||this.nowPlayList.albumid!=item.album_id){
					this.$store.dispatch('getSongDetailsData',item).then(res=>{
						this.$store.commit('setIsPlay',2);
					});//请求一下当前歌曲详情
				}else{
					switch(this.isPlay){
					     case 1:
						    this.$store.commit('setIsPlay',2);
					       break;
					     case 2:
							this.$store.commit('setIsPlay',1);
					     break;
					}
				}
				
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.main-hover-color{
		background-color #f8f8f8;
	}
	.song-list-box{
		.song-list:last-child{
			border none;
		}
	}
	.song-list{
		box-sizing border-box;
		padding 0 33upx;
		height:133upx;
		border-bottom: 1upx #F8F8F8 solid;
		display flex;
		justify-content center;
		flex-direction column;
		position relative;
		&.active{
			background:rgba(35,227,121,1);
			border-bottom:1upx rgba(35,227,121,1) solid;
			color #fff;
			.more-icon,.song-title,.song-des{
				color #fff;
			}
		}
		.more-icon{
			position absolute;
			right 20upx;
			top 50%;
			transform translateY(-50%);
			font-size 40upx;
			color #8e8e8e;
		}
		.song-title{
			font-size:29upx;
			font-weight:500;
			color:rgba(67,67,67,1);
			width 80%;
			overflow hidden;
			text-overflow ellipsis;
			white-space nowrap;
		}
		.song-des{
			font-size:25upx;
			font-weight:400;
			color:rgba(117,117,117,1);
			width 90%;
			overflow hidden;	
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	
</style>
