<template>
	<view class="goods-slide">
		<view class="uni-tab-bar">
			<scroll-view :scroll-x="true" class="scroll-big-box uni-swiper-tab" style="border-bottom:none" :enable-flex="true" :show-scrollbar="false">
				<view class="scroll-item swiper-tab-list" v-for="(item,index) in details" :key="index" @tap="clickMenu(item)">
					<view class="scroll-top">
						<image :src="item.imgurl.replace('{size}', imgSize)" class="item-img" mode="widthFix" lazy-load></image>
						<view class="item-icon-box">
							<text class="icon-bofang4 iconfont"></text>
							{{item.playcount}}
						</view>
					</view>
					<view class="scroll-text-des">
						{{item.intro}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		name: "goodsSlide",
		props: {
			details: {
				type:Array,
				default:[]
			}
		},
		computed:{
			...mapState(['imgSize'])
		},
		data() {
			return {

			}
		},
		methods:{
			clickMenu(item){
				this.$emit('clickMenu',item)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.scroll-big-box {
		height 270upx;
		padding: 0 30upx;
		box-sizing border-box;
	}
	.scroll-item{
		width 180upx;
		margin-right 25upx;
		&:last-child{
			margin-right:0;
		}
	}
	.scroll-top {
		width 180upx;
		height 180upx;
		border-radius 8upx;
		position relative;

		.item-img {
			width 180upx;
			height 180upx;
			border-radius 8upx;
		}

		.item-icon-box {
			position absolute;
			width 100%;
			top 0;
			left 0;
			font-size 12px;
			text-align right;
			color #ffffff;
			height 40upx;
			display flex;
			align-items center;
			justify-content flex-end;
			padding-right 10upx;
			box-sizing border-box;
			.iconfont {
				font-size 10px;
				color #FFFFFF;
				margin-right 5upx;
				
			}
		}
	}
	.scroll-text-des{
		 overflow: hidden;  
		 text-overflow: -o-ellipsis-lastline;
		 display: -webkit-box;
		 -webkit-box-orient: vertical;
		 -webkit-line-clamp: 2;  
		 min-height: 60upx;
		 line-height: 1.4;
		 text-overflow: ellipsis;
		 font-size: 25upx;
		 color: #434343;
		 margin-top 8upx;
		 white-space: normal;
		 text-align: left;
	}
</style>
