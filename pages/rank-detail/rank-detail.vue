<template>
	<view class="rank-detail">
		<uni-nav-bar left-icon="arrowleft" backgroundColor="transparent" color="#ffffff" title="歌单详情" :statusBar="true" @clickLeft="back" class="top-bar"></uni-nav-bar>
		<view class="top-bg">
			<image :src="detail.imgurl.replace('{size}', imgSize)" mode="aspectFill" lazy-load class="top-bg-img"></image>
			<view class="top-center">
				<view class="center-top">
					<image class="center-top-img" :src="detail.imgurl.replace('{size}', imgSize)" mode="aspectFill" lazy-load></image>
					<view class="center-top-right">
						<view class="avatar">
							<image :src="detail.album_img_9.replace('{size}', imgSize)" mode="aspectFill" lazy-load class="avatar-img"></image>
							<text>{{detail.update_frequency}}更新</text>
						</view>
						<view class="title">
							{{detail.rankname}}
						</view>
						<view class="des">
							<text>{{pagesize}}首歌曲</text>
							<text class="des-text">{{detail.rankid}}万次播放</text>
						</view>
					</view>
				</view>
				<view class="center-bottom">
					<view class="center-bottom-list">
						<text class="iconfont icon-bofang1"></text>
						<text class="des">播放</text>
					</view>
					<view class="center-bottom-list">
						<text class="iconfont icon-shoucang"></text>
						<text class="des">收藏</text>
					</view>
					<view class="center-bottom-list">
						<text class="iconfont icon-changyongicon-"></text>
						<text class="des">下载</text>
					</view>
					<view class="center-bottom-list">
						<text class="iconfont icon-icon_fuben"></text>
						<text class="des">评论</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="rank-song-box">
			
			<view class="rank-song" v-for="(item,index) in list" :key="index">
				<view class="left">
					{{index+1}}
				</view>
				<view class="right">
					<view class="title">
						{{item.remark}}
					</view>
					<view class="des">
						{{item.filename}}
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import { mapState } from "vuex";
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import { getRankSongList } from '@/utils/api.js'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				detail:{},
				list:[],
				pagesize:0,
			}
		},
		computed:{
			...mapState(['imgSize'])
		},
		onLoad(options){
			console.log('options',options);
			getRankSongList({
			  rankid: options.rankid,
			  json: true,
			  page: 0
			}).then(res=>{
				console.log('res',res);
				if(res.data.pagesize){
					this.pagesize=res.data.pagesize;
					this.detail=res.data.info;
					this.list=res.data.songs.list;
				}
			})
		},
		methods: {
			back() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.top-bar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height 44px;
		z-index 1000;
	}
	.top-bg{
		height 389upx;
		position relative;
		width 100%;
		.top-bg-img{
			height 389upx;
			filter: blur(10px);
			width 100%;
		}
		.top-center{
			position absolute;
			left 50%;
			top 160upx;
			transform translateX(-50%);
			width:683upx;
			height:389upx;
			background:rgba(255,255,255,1);
			border-radius:4upx;
			box-shadow: 0 0 4px #F7F6F9;
			.center-top{
				display flex;
				align-items center;
				box-sizing border-box;
				padding 33upx 33upx 0 33upx;
				.center-top-img{
					width:222upx;
					height:222upx;
					border-radius:4upx;
				}
				.center-top-right{
					display flex;
					flex-direction column;
					margin-left 27upx;
					.avatar{
						display flex;
						align-items center;
						font-size:25upx;
						font-weight:400;
						color:rgba(117,117,117,1);
						.avatar-img{
							width:42upx;
							height:42upx;
							border-radius:50%;
							margin-right 16upx;
						}
					}
					.title{
						font-size:33upx;
						font-weight:bold;
						color:rgba(67,67,67,1);
						height 84upx;
						margin-top 33upx;
					}
					.des{
						font-size:25upx;
						font-weight:400;
						color:rgba(117,117,117,1);
						.des-text{
							margin-left 53upx;
						}
					}
				}
			}
			.center-bottom{
				display flex;
				align-items center;
				justify-content space-around;
				.center-bottom-list{
					display flex;
					flex-direction column;
					.iconfont{
						font-size 50upx;
						color #434343;
					}
					.des{
						font-size:25upx;
						font-weight:400;
						color:rgba(117,117,117,1);
						margin-top -20upx;
					}
				}
			}
		}
	}
	.rank-song-box{
			box-sizing border-box;
			padding 0 33upx;
			margin-top 180upx;
		.rank-song{
			display flex;
			.left{
				font-size:29upx;
				font-weight:400;
				color:rgba(117,117,117,1);
				margin-right 40upx;
				margin-left 10upx;
				display flex;
				align-items center;
			}
			.right{
				display flex;
				flex-direction column;
				justify-content center;
				height 172upx;
				flex 1;
				border-bottom 1upx #F2F2F2 solid;
				.title{
					font-size:29upx;
					font-weight:500;
					color:rgba(67,67,67,1);
				}
				.des{
					font-size:25upx;
					font-weight:400;
					color:rgba(117,117,117,1);
				}
			}
		}
	}
</style>
