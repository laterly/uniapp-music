<template>
	<view>
		<view class="uni-tab-bar uni-tab-bar-box">
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
						<view class="index-list">1</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" class="list">
						<view class="index-list">
							<room></room>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" class="list">
						<view class="index-list">3</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import room from '@/components/room/room.vue'
	export default {
		data() {
			return {
				currentIndex: 1,
				swiperHeight: '',
				tabIndex: 1,
				tabBars: [{
						name: '我的',
						id: 1
					},
					{
						name: '音乐室',
						id: 2
					},
					{
						name: '动态',
						id: 3
					}
				]
			};
		},
		mounted() {
			console.log('123');
			uni.getSystemInfo({
				success: (res) => {
					
					let height=res.screenHeight-res.statusBarHeight-50-50;
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
		padding: 0 20%;
		box-sizing: border-box;
		margin-top: 10upx;
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

	.uni-tab-bar .active::after {
		position: absolute;
		content: '';
		width: 50upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #23e379;
		left: 50%;
		transform: translateX(-50%);
		bottom: -10%;
	}

	.index-list {
		color: red;
	}

	.swiper-box {
		/* border: 1px red solid; */
	}
</style>
