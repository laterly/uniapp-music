<template>
	<view class="rank">
		<view class="rank-box">
			
			<view class="rank-list pulse animated" v-for="(rank,rankIndex) in rankList" :key="rankIndex">
				<view class="rank-top">
					<view class="rank-title">
						{{rank.title}}
					</view>
					<view class="rank-title-des">
						{{rank.des}}
					</view>
				</view>
				<view class="rank-center">
					<view class="rank-line" v-for="(item,index) in rank.list" :key="index">
						{{index+1}}.<text class="line-name">{{item.name}}</text>
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rankList:[
					{
						title:'新歌榜',
						des:'每天更新',
						list:[
							{
								name:'还是爱了 - 曾缔'
							},
							{
								name:'还是爱了 - 曾缔'
							},
							{
								name:'还是爱了 - 曾缔'
							}
						]
					},
					{
						title:'热歌榜',
						des:'每天更新',
						list:[
							{
								name:'还是爱了 - 曾缔'
							},
							{
								name:'还是爱了 - 曾缔'
							},
							{
								name:'还是爱了 - 曾缔'
							}
						]
					},
					{
						title:'民歌榜',
						des:'每天更新',
						list:[
							{
								name:'还是爱了 - 曾缔1'
							},
							{
								name:'还是爱了 - 曾缔2'
							},
							{
								name:'还是爱了 - 曾缔'
							}
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
	.rank-box{
		box-sizing: border-box;
		padding: 0 33upx;
	}
	.rank-list{
		margin-top 64upx;
		opacity 0.9;
		border-radius:4px;
		&:nth-child(1){
			margin-top 30upx;
			background:linear-gradient(90deg,rgba(26,167,225,1),rgba(57,197,255,1));
		}
		&:nth-child(2){
			background:linear-gradient(90deg,rgba(225,111,26,1),rgba(255,148,68,1));
		}
		&:nth-child(3){
			background:linear-gradient(90deg,rgba(225,171,26,1),rgba(255,208,82,1));
		}
		.rank-top{
			display flex;
			height 100upx;
			align-items center;
			box-sizing border-box;
			padding 0 33upx;
			border-bottom 1upx #ffffff solid;
			.rank-title{
				font-size:50upx;
				font-weight:bold;
				color:rgba(255,255,255,1);
			}
			.rank-title-des{
				font-size:25upx;
				font-weight:400;
				color:rgba(255,255,255,1);
				margin-left 17upx;
				margin-top 30upx;
			}
		}
		.rank-center{
			height 260upx;
			box-sizing border-box;
			padding 32upx 0 0 34upx;
			.rank-line{
				font-size:29upx;
				font-weight:400;
				color:rgba(255,255,255,1);
				margin-top 20upx;
				&:nth-child(1){
					margin-top 0;
				}
				.line-name{
					margin-left 10upx;
				}
			}
		}
	}
</style>
