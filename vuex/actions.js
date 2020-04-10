import { getNewSongs,getSongMenu,getRank,getSongDetails,getRank2,getSongDetails2,getSongDetails3} from '../utils/api.js'

let actions = {
    getNewSongsData({ commit }) {
		uni.showLoading({
		    title: '加载中'
		});
		getNewSongs().then(res=>{
			console.log('getNewSongs',res);
			uni.hideLoading();
			if(res.statusCode===200){
				commit('setNewSongData', res.data.data);
				commit('setBannerData', res.data.banner);
			}
		})
    },
	getSongMenuData({ commit }){
		return new Promise((reslove,reject)=>{
			getSongMenu({
			  page: 0
			}).then(res=>{
				console.log('getSongMenu',res);
				if(res.statusCode===200){
					reslove( res.data.plist.list.info);
					commit('setSongMenuData', res.data.plist.list.info);
				}
			})
		})
	},
	getRankData({ commit }){
		
		getRank2().then(res=>{
			console.log('getRank',res);
			if(res.statusCode===200){
				commit('setRankData', res.data.data.info);
			}
		})
	},
	// getSongDetailsData({commit},obj){
	// 	return new Promise((reslove,reject)=>{
	// 		getSongDetails3().then(res=>{
	// 			console.log('getSongDetails',JSON.stringify(res));
				
	// 		})
	// 	})  
	// },
	getSongDetailsData({commit},obj){
		return new Promise((reslove,reject)=>{
			getSongDetails2({
			  hash: obj.hash
			}).then(res=>{
				console.log('getSongDetails',JSON.stringify(res));
				if(res.statusCode===200){
					reslove(res.data);
					commit('setNowPlayList', res.data);
				}
			})
		})  
	}
}

export default actions;
