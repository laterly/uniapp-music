<template>
	<view>
		<uni-nav-bar class="search-bar" left-icon="arrowleft" :statusBar="true" :fixed="true" leftWidth="25px" @clickLeft="back">
			<view class="nav-search">
				<input type="text" value="" placeholder="您想听什么？" v-model="keyValue" class="search-input" :focus="true" @input="searchSongInput" />
				<text class="iconfont icon-sousuo search-icon" @tap="toSearch"></text>
			</view>
		</uni-nav-bar>

		<view class="search-page1">
			<view class="history" v-if="isHistory">
				<view class="history-top">
					<view class="title">
						搜索历史
					</view>
					<text class="del-icon iconfont icon-lajitong" @tap="delKey"></text>
				</view>

				<view class="history-content">
					<view class="content-list"  v-for="(item,index) in storageKeyArr" :key="index">
						{{item}}
					</view>
				</view>
			</view>

			<view class="history" style="padding-top:15px">
				<view class="history-top">
					<view class="title">
						推荐搜索
					</view>
				</view>
				<view class="history-content">
					<view class="content-list" v-for="(item,index) in hotKeyArr" :key="index" @click="onSearch(item.keyword)">
						{{item.keyword}}
					</view>
				</view>
			</view>

			<view class="hot-box">
				<view class="hot-box-top">
					<view class="title">
						热门搜索
					</view>
					<view class="rank-song-box">
						<view class="rank-song" v-for="(item,index) in hotInfo" :key="index" @tap="onSearch(item.filename)">
							<view class="left">
								{{index+1}}
							</view>
							<view class="right">
								<view class="title">
									{{item.filename}}
								</view>
								<view class="des">
									{{item.singername}}
								</view>
							</view>
						</view>

					</view>
				</view>
			</view>
		</view>

		<view class="search-page2">
			<view class="key-none">
				暂无
			</view>
			<view class="key-list">
				<text class="iconfont icon-sousuo search-icon"></text>111
			</view>
		</view>

		<view class="search-page3" v-if="listData.length!=0&&isShowPage">
			<song-list :songArr="listData" @goPlay="clickSong"></song-list>
		</view>

	</view>
</template>

<script>
	// http://msearchcdn.kugou.com/new/app/i/search.php?student=0&cmd=302&keyword=你好&with_res_tag=1
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import songList from "@/components/song-list/song-list.vue"
	import {
		getHotSearch,
		getSearchKey,
		getSongSearch,
		getSearchKey2
	} from '@/utils/api.js'
	import {
		debounce
	} from '@/utils/lib.js';
	export default {
		components: {
			uniNavBar,
			songList
		},
		data() {
			return {
				isHistory:false,//是否有本地历史
				list: [{}],
				hotKeyArr: [],
				totalSongs: '',
				totalPage: '',
				listData: [],
				key: '',
				hotInfo:[],
				isShowPage:false,
				keyValue:'',
				storageKeyArr:[]
			}
		},
		onLoad() {
			this.getHistory();
			this.getHotSearchData();
			this.$watch('key', debounce(() => {
				// this.getSearchKeyData(this.key);
			},300))
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			delKey(){
				uni.removeStorage({
				    key: 'history',
				    success: (res)=> {
						uni.showModal({
						    title: '提示',
						    content: '确定删除吗？',
						    success: function (res) {
						        if (res.confirm) {
						            this.isHistory=false;
									this.storageKeyArr=[];
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
				        
				    }
				});
			},
			getHistory(){
				return new Promise((reslove, reject) => {
					uni.getStorage({
				    key: 'history',
				    success: (res)=> {
				        console.log('history',res);
						if(res.data.length!=0){
							console.log('进来');
							this.storageKeyArr=res.data;
							reslove(res.data);
							this.isHistory=true;
						}else this.isHistory=false;
				    },
					fail:(err)=>{
						this.isHistory=false;
						console.log('err',err);
					}
				});
				});
			},
			
			getHotSearchData() {
				getHotSearch().then((res) => {
					this.hotKeyArr = res.data.data.info;
					this.getSearchData('热门歌曲').then(res=>{
						this.hotInfo=res.data.data.info;
					})
				})
			},
			clickSong(item){
				
			},
			toSearch(){
				console.log('dddd');
				this.getSearchData().then(res=>{
					this.listData=res.data.data.info;
				})
				this.setKey(this.keyValue)
			},
			setKey(key){
				this.storageKeyArr.push(key);
				this.storageKeyArr=Array.from(new Set(this.storageKeyArr));
				uni.setStorage({
				    key: 'history',
				    data: this.storageKeyArr,
				    success:()=> {
				        console.log('success');
						this.isHistory=true;
				    }
				});
			},
			onSearch(key) {
				console.log('key',key);
				this.isShowPage=true;
				this.key=key;
				this.setKey(key)
				this.getSearchData(key).then(res=>{
					this.listData=res.data.data.info;
					this.keyValue=key;
				})
			},
			searchSongInput(e) {
				console.log('e',e);
				let key=e.detail.value;
				if(key!==''){
					this.isShowPage=true;
					this.key=key;
				}else{
					this.key='';
					this.isShowPage=false;
					this.listData=[];
				}
				
			},
			getSearchKeyData(key){
				getSearchKey2({
					keyword: this.key
				}).then((res) => {
					console.log('getSearchKey',res);
					
				})
			},
			getSearchData(key) {
				uni.showLoading({
				    title: '加载中'
				});
				return new Promise((reslove, reject) => {
					getSongSearch({
						format: 'json',
						keyword: key || this.keyValue,
						page: 0,
						pagesize: 20
					}).then((res) => {
						uni.hideLoading();
						reslove(res)
					})
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.nav-search {
		position relative;

		.search-input {
			width 660upx;
			height 60upx;
			background-color #F8F8F8 !important;
			border-radius 120upx;
			font-size 25upx;
			text-indent 50upx;
			transition .2s width ease;
		}

		.search-icon {
			position absolute;
			right 45upx;
			top 50%;
			transform translateY(-50%);
			color #757575;
			font-size 42upx;
		}
	}

	.search-page1,
	.search-page2,
	.search-page3 {
		margin-top 15upx;
	}

	.history {
		box-sizing border-box;
		padding 0 30upx;
		clear both;

	}

	.history-top {
		display flex;
		justify-content space-between;
		align-items center;

		.title {
			font-size: 28upx;
			font-weight: 500;
			color: #434343;
		}

		.del-icon {
			color: #757575;
			font-size: 35upx;
		}
	}

	.history-content {
		clear both;
		width 100%;
		height auto;

		.content-list {
			font-size: 24upx;
			font-weight: 500;
			color: rgba(104, 104, 104, 1);
			padding 4upx 18upx;
			background: rgba(244, 243, 241, 1);
			border-radius: 30px;
			float left;
			margin-right 40upx;
			margin-top 15upx;
		}
	}

	.hot-box {
		clear both;
		padding 0 30upx;
		padding-top 20upx;
		box-sizing border-box;

		.hot-box-top {
			.title {
				font-size: 28upx;
				font-weight: 500;
				color: #434343;
			}
		}
	}

	.rank-song-box {
		box-sizing border-box;

		.rank-song {
			display flex;
			&:nth-child(1){
				.left{
					color red;
				}
			}
			&:nth-child(2){
				.left{
					color red;
				}
			}
			&:nth-child(3){
				.left{
					color red;
				}
			}
			.left {
				font-size: 29upx;
				font-weight: 400;
				color: rgba(117, 117, 117, 1);
				width 60upx;
				display flex;
				align-items center;
				
			}

			.right {
				display flex;
				flex-direction column;
				justify-content center;
				height 100upx;
				flex 1;
				border-bottom 1upx #F2F2F2 solid;

				.title {
					font-size: 29upx;
					font-weight: 500;
					color: rgba(67, 67, 67, 1);
					width 80%;
					overflow hidden;
					text-overflow ellipsis;
					white-space nowrap;
				}

				.des {
					font-size: 25upx;
					font-weight: 400;
					color: rgba(117, 117, 117, 1);
					width 80%;
					overflow hidden;
					text-overflow ellipsis;
					white-space nowrap;
				}
			}
		}
	}

	.search-page2 {
		position fixed;
		top 150upx;
		width 100%;
		height 100%;
		left 0;
		z-index 1000;
		background #fff;
		box-sizing border-box;
		display none;
		.key-none {
			color: #23e379;
			position: relative;
			font-size: 32upx;
		}

		.key-list {
			display flex;
			align-items center;
			overflow hidden;

			.search-icon {
				color #434343;
				font-size 35upx;
				margin-right 10upx;
			}
		}
	}

	.search-page3 {
		position fixed;
		top 150upx;
		/* #ifdef H5 */
		top 100upx;
		/* #endif */
		width 100%;
		height 100%;
		left 0;
		z-index 1000;
		background #fff;
		box-sizing border-box;
		overflow: auto;
	}
</style>
