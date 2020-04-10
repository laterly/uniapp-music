<template>
	<view class="find">
		<!-- swiper -->
		<swiper 
		class="find-swiper"
		:indicator-dots="true" 
		indicator-active-color="#ffffff"
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		:circular="true"
		:vertical="false"
		>
			<swiper-item 
			v-for="(item, index) in swpierList" 
			:key="index"
			>
				<image :src="item.picture" mode="aspectFill" class="find-swiper-img" lazy-load @tap="goPlay(item)"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			swpierList:{
				type: Array,
				default: []
			}
		},
		data() {
			return{
				
			}
		},
		methods:{
			goPlay(item){
				this.$emit('goPlay', item);
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
.find{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.find-swiper{
	margin-bottom: 25upx;
	width: 700upx;
	height: 280upx;
}
.find-swiper-img{
	width: 100%;
	height: 100%;
	// border-radius: 10px;
}
</style>
