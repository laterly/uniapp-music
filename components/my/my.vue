<template>
	<view class="my">
		<view class="my-list" v-for="(list,index) in myList" :key="index">
			<image :src="list.img" mode="widthFix" lazy-load class="my-img" :style="'width:'+list.width+'px;height: auto;'"></image>
			<view class="my-des">
				<view class="name">{{list.name}}</view>
				<view class="count">{{list.count}}</view>
			</view>
			<text class="more-icon iconfont icon-gengduo-shuxiang"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				myList: [{
						name: '本地乐曲',
						id: 1,
						count:88,
						img:'../../static/imgs/my/1.png',
						width:22
					},
					{
						name: '最近播放',
						id: 2,
						count:276,
						img:'../../static/imgs/my/2.png',
						width:37
					},
					{
						name: '下载乐曲',
						id: 3,
						count:88,
						img:'../../static/imgs/my/3.png',
						width:35
					},
					{
						name: '下载MV',
						id: 4,
						count:12,
						img:'../../static/imgs/my/4.png',
						width:35
						
					},
					{
						name: '我的电台',
						id: 5,
						count:9,
						img:'../../static/imgs/my/5.png',
						width:28
					},
					{
						name: '我的收藏',
						id: 6,
						count:22,
						img:'../../static/imgs/my/6.png',
						width:30
					},
					{
						name: '创建的歌单',
						id: 7,
						count:16,
						img:'../../static/imgs/my/7.png',
						width:32
					},
					{
						name: '收藏的歌单',
						id: 8,
						count:16,
						img:'../../static/imgs/my/8.png',
						width:30
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
	.my{
		padding 0 30upx;
		box-sizing border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between ;
		box-sizing:border-box;
	}
	.my-list{
		width 335upx;
		height 180upx;
		background-color #f8f8f8;
		border-radius 8upx;
		margin-top 20upx;
		display flex;
		justify-content space-between;
		&:nth-child(1){
			margin-top 10upx;
		}
		&:nth-child(2){
			margin-top 10upx;
		}
		.my-img{
			margin-top 50upx;
			margin-left 40upx;
		}
		.my-des{
			display flex;
			flex-direction column;
			margin-right 33upx;
			box-sizing border-box;
			padding-top 50upx;
			.name{
				color: #343434;
				font-size: 33upx;
			}
			.count{
				font-size 25upx;
				color #8e8e8e;
			}
		}
	}
	.more-icon{
		display none;
	}
	.my-list:nth-child(7),.my-list:last-child{
		flex: 0 1 100%;
		justify-content initial;
		position relative;
		.my-des{
			margin-left 76upx;
		}
		.more-icon{
			display block;
			position absolute;
			right 20upx;
			top 8upx;
			font-size 40upx;
			color #8e8e8e;
		}
	}
</style>
