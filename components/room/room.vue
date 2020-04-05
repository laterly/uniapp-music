<template>
	<view class="">
		<special-banner :banner-list="bannerList" :swiper-config="swiperConfig"></special-banner>
		<room-tab></room-tab>
	</view>
</template>

<script>
	import specialBanner from "@/components/special-banner/special-banner.vue"
	import roomTab from "@/components/room-tab/room-tab.vue"
	export default {
		components: {
			specialBanner,
			roomTab
		},
		data() {
			return {
				bannerList: [{
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
				}, {
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
				}, {
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
				}, {
					picture: 'http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png',
				}],
				swiperConfig: {
					indicatorDots: true,
					indicatorColor: 'rgba(255, 255, 255, .4)',
					indicatorActiveColor: 'rgba(255, 255, 255, 1)',
					autoplay: true,
					interval: 6000,
					duration: 300,
					circular: true,
					previousMargin: '58rpx',
					nextMargin: '58rpx'
				}
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
