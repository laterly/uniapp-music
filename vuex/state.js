let state = {
	imgSize:400,//图片大小设置
    newSongData: [],//新歌列表
	bannerData:[],//banner列表
	songMenuData:[],//歌单列表
	rankData:[],//排行榜列表
	nowPlayList:{},//现在正在播放的歌曲
	isPlay:0,//是否正在播放,2是正在播放，1是暂停，0是暂无歌曲
	playHistoryList:[],//历史播放列表
	timeData:{
		timeRange:0,
		chDuration: ['0', '00'],
		chCurrentTime: ['0', '00']
	},//存储时间
	AudioContext:null
	
}

export default state


