<template>
	<view>
		<view class="uni-tab-bar uni-tab-bar-box" :style="center?'padding: 0 30%;':''">
			<scroll-view scroll-x class="uni-swiper-tab" :enable-flex="true" :show-scrollbar="false">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="{'active':tabIndex==index}" @tap="tabtap(index)">
						{{tab.name}}
				</view>
			</scroll-view>
		</view>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{'height':swiperHeight+'px'}" @change="tabChange" :current="currentIndex">
				<swiper-item>
					<scroll-view :scroll-y="true" class="list">
						<slot name="list0"></slot>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" class="list">
						<view class="index-list">
							<slot name="list1"></slot>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" class="list">
						<view class="index-list">
							<slot name="list2"></slot>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBars:{
				type:Array,
				default:[]
			},
			center:{
				type:Boolean,
				default:false
			}
		},
		components: {
			
		},
		data() {
			return {
				currentIndex: 0,
				swiperHeight: '',
				tabIndex: 0,
				
			};
		},
		mounted() {
			console.log('123');
			uni.getSystemInfo({
				success: (res) => {
					let height=res.windowHeight-50-5;
					this.swiperHeight=height;
					console.log('res', res,height);
				}
			});
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index;
				this.currentIndex = index;
			},
			tabChange(e) {
				console.log(e);
				if (e.detail.source == 'touch')
					this.tabIndex = e.detail.current;
			}
		}
	}
</script>

<style>
	.uni-swiper-tab {
		border-bottom: none;
	}
	.uni-tab-bar-box{
		box-sizing: border-box;
		margin-top: 5px;
	}
	.swiper-tab-list {
		color: #969696;
		position: relative;
		font-size: 32upx;
		font-size: bold;
	}
	
	.uni-tab-bar .active {
		color: #343434;
		font-size: 33upx;
	}
	.uni-tab-bar .active{
		transition: 0.2s all linear;
	}
	.uni-tab-bar{
		transition: 0.2s all linear;
	}
	.swiper-tab-list::after{
		position: absolute;
		content: '';
		width: 0;
		height: 6upx;
		border-radius: 20upx;
		background-color: #23e379;
		left: 50%;
		transform: translateX(-50%);
		transition: 0.3s width linear;
		opacity: 0;
	}
	.swiper-tab-list.active::after {
		position: absolute;
		content: '';
		width: 50upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #23e379;
		left: 50%;
		transform: translateX(-50%);
		bottom: -10%;
		opacity: 1;
	}
</style>
