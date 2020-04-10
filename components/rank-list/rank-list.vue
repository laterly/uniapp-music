<template>
	<view class="rank-list">
		
		<view class="rank-list-box" v-for="(item,index) in details" :key="index" @tap="clickTo(item)" v-if="item.songinfo">
			<view class="rank-left">
				<view class="title">
					{{item.rankname}}
				</view>
				<view class="des" v-for="(itemSong,songIndex) in item.songinfo" :key="songIndex">
					<text class="des-text">{{songIndex+1}}.{{itemSong.songname}}</text>
				</view>
			</view>
			<view class="rank-right">
				<image class="rank-img" :src="item.imgurl.replace('{size}', imgSize)" mode="aspectFill" lazy-load></image>
				<view class="rank-right-top">
					{{item.update_frequency}}更新
				</view>
				<view class="rank-bottom">
					<view class="rank-bottom-left">
						<text class="iconfont icon-dianyingzhiye-gequbang"></text>
						{{item.rankid}}
					</view>
					<view class="rank-bottom-right">
						<text class="iconfont icon-bofang"></text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		props:{
			details:{
				type:Array,
				default:[]
			}
		},
		computed:{
			...mapState(['imgSize'])
		},
		data() {
			return {
				rankList:[]
			}
		},
		methods: {
			clickTo(item){
				this.$emit('onClick',item)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.rank-list-box{
		display flex;
		justify-content space-between;
		background #fff;
		box-sizing border-box;
		margin 0 30upx;
		margin-top 25upx;
		border-radius 8upx;
		background-color #f8f8f8;
		.rank-left{
			display flex;
			flex-direction column;
			margin-left 25upx;
			margin-top 10upx;
			width 60%;
			
			overflow:hidden;
			.title{
				font-size: 34upx;
				color: #434343;
			}
			.des{
				font-size: 25upx;
				color: #969696;
				display flex;
				flex-direction column;
				.des-text{
					overflow:hidden;
					white-space nowrap;
					text-overflow ellipsis;
				}
			}
		}
		.rank-right{
			width 220upx;
			height 220upx;
			border-radius 0 8upx 8upx 0;
			position relative;
			.rank-img{
				width 220upx;
				height 220upx;
				border-radius 0 8upx 8upx 0;
			}
			.rank-right-top{
				height 60upx;
				position absolute;
				top 0;
				left 0;
				width 100%;
				text-align right;
				padding-right 10upx;
				box-sizing border-box;
				font-size 12px;
				color #ffffff;
			}
			.rank-bottom{
				height 60upx;
				position absolute;
				bottom 0;
				left 0;
				display flex;
				justify-content space-between;
				align-items center;
				box-sizing border-box;
				padding 10upx;
				width 100%;
				.rank-bottom-left{
					display flex;
					font-size 12px;
					color #ffffff;
					.iconfont{
						font-size 12px;
						color #FFFFFF;
						margin-right 8upx;
					}
				}
				.rank-bottom-right{
					width 40upx;
					height 40upx;
					display flex;
					align-items center;
					justify-content center;
					background rgba(255,255,255,0.8);
					border-radius 50%;
					.iconfont{
						font-size 12px;
						color #969696;
					}
				}
			}
		}
	}
</style>
