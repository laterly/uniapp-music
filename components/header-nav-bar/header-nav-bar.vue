<template>
	<view>
		<uni-nav-bar :statusBar="true" class="top-bar">
			<view slot="left">
				<text class="iconfont icon-caidan left-icon"></text>
			</view>
			<view slot="right"><text class="iconfont icon-xinxi right-icon"></text></view>
			<view class="nav-search" @tap="toSearch">
				<input type="text" value="" placeholder="您想听什么？" class="search-input" :disabled="true"/>
				<text class="iconfont icon-sousuo search-icon"></text>
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
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
	
		},
		methods: {
			toSearch(){
				this.path.navigateTo('../../pages/search/search')
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
	.uni-navbar--border{
	     border none!important;
		 border-bottom-color: transparent!important;
	}
	
	.top-bar{
		    position: fixed;
		    left: 0;
		    top: 0;
		    width: 100%;
			height 44px;
	}
	.left-icon{
		margin-left 30upx;
		font-size 40upx;
		color #8e8e8e;
	}
	.right-icon{
		font-size 41upx;
		color #8e8e8e;
	}
	.nav-search{
		position relative;
		.search-input{
			width 530upx;
			height 60upx;
			background-color #F8F8F8!important;
			border-radius 120upx;
			font-size 25upx;
			text-indent 50upx;
		}
		.search-icon{
			position absolute;
			right 45upx;
			top 50%;
			transform translateY(-50%);
			color #757575;
			font-size 42upx;
		}
	}

</style>
