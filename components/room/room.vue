<template>
	<view class="room">
		<!-- <banner-swiper :swpierList="bannerList"></banner-swiper> -->
		<special-banner :bannerList='bannerData'></special-banner>
		<room-tab></room-tab>
		<view class="room-item" v-for="(item,index) in menuData">
			<room-cell :title="index==0?'推荐歌单':'每日推荐'"></room-cell>
			<goods-slide :details="item" @clickMenu="clickMenu"></goods-slide>
		</view>
		<view class="room-item">
			<room-cell title="新歌专栏"></room-cell>
			<view class="room-new-song">
				<song-list :songArr="newSongData" @goPlay="clickSong"></song-list>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	import bannerSwiper from "@/components/banner-swiper/banner-swiper.vue"
	import specialBanner from "@/components/special-banner/special-banner.vue"
	import roomTab from "@/components/room-tab/room-tab.vue"
	import roomCell from "@/components/room-cell/room-cell.vue"
	import goodsSlide from "@/components/goods-slide/goods-slide.vue"
	import songList from "@/components/song-list/song-list.vue"
	import { getNewSongs} from "@/utils/api.js"
	import { splitArrary } from "@/utils/lib.js"
	export default {
		components: {
			bannerSwiper,
			songList,
			specialBanner,
			roomTab,
			roomCell,
			goodsSlide
		},
		computed:{
			...mapState(['bannerData','newSongData','songMenuData'])
		},
		data() {
			return {
				menuData:[]
			}
		},
		mounted(){
			this.$store.dispatch('getSongMenuData').then(res=>{
				this.menuData=splitArrary(this.songMenuData,16);
			});//获取歌单列表数据
			
			console.log('menuData',this.menuData)
		},
		methods: {
			swiperChange(current) {
				console.log(current);
			},
			tapFun(e) {
				console.log(e.type, e.id, e.index);
			},
			clickMenu(e){
				console.log('clickMenu',e);
			},
			clickSong(e){
				console.log('clickSong',e);
			}
		}
	}
</script>

<style>
	
</style>
