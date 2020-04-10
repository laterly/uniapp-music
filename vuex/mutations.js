//import {example1,example2} from '@/vuex/mutations'
let mutations = {
    setNewSongData(state, data) {
        state.newSongData = data;
    },
	setBannerData(state, data){
		state.bannerData = data;
	},
	setSongMenuData(state, data){
		state.songMenuData = data;
	},
	setRankData(state, data){
		state.rankData = data;
	},
	setNowPlayList(state, data){
		console.log('data',data);
		state.nowPlayList = Object.assign({}, state.nowPlayList, data);
	},
	setIsPlay(state, data){
		state.isPlay = data;
	},
	setTimeData(state, data){
		state.timeData = Object.assign({}, state.timeData, data);
	},
	setAudioContext(state){
		state.AudioContext = uni.createInnerAudioContext();
	}
}

//mutations=Object.assign(mutations,example1,example2)if
export default mutations;
