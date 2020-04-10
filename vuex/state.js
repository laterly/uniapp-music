let state = {
	imgSize:400,//图片大小设置
    newSongData: [],//新歌列表
	bannerData:[],//banner列表
	songMenuData:[],//歌单列表
	rankData:[],//排行榜列表
	nowPlayList:{"fileHead":100,"q":0,"extra":{"320filesize":9447087,"sqfilesize":28200182,"sqhash":"C1ACB43B8AB24A8875897F1C061FD9C5","128hash":"5B7F8DCFB2CB2240D5EE8E917A0B1AEF","320hash":"144F5AEC03CC2CA3A75EA3DACE2169CC","128filesize":3778934},"fileSize":3778934,"choricSinger":"梦然","album_img":"http://imge.kugou.com/stdmusic/{size}/20191110/20191110174405582448.jpg","topic_remark":"","url":"https://sharefs.yun.kugou.com/202004101615/ba01bb9ae54a17d14d9eee8b0fb5ebb2/G170/M07/16/11/SocBAF3H3aqAUYOEADmpdloW3bU827.mp3","time":1586506550,"trans_param":{"cid":80818881,"pay_block_tpl":1,"musicpack_advance":0,"display_rate":0,"cpy_level":1,"display":0,"exclusive":1},"albumid":33194412,"singerName":"梦然","topic_url":"","extName":"mp3","songName":"少年","singerHead":"","hash":"5B7F8DCFB2CB2240D5EE8E917A0B1AEF","mvhash":"","store_type":"audio","error":"","imgUrl":"http://singerimg.kugou.com/uploadpic/softhead/{size}/20200316/20200316100918253.jpg","album_audio_id":233125060,"area_code":"1","bitRate":128,"intro":"","128privilege":8,"privilege":8,"status":1,"stype":11323,"req_hash":"5B7F8DCFB2CB2240D5EE8E917A0B1AEF","320privilege":10,"audio_id":62878164,"fileName":"梦然 - 少年","singerId":84974,"ctype":1009,"errcode":0,"sqprivilege":10,"backup_url":["https://sharefs.cloud.kugou.com/202004101615/2abaa1e950a5e40422c17ee68de8ea5c/G170/M07/16/11/SocBAF3H3aqAUYOEADmpdloW3bU827.mp3"],"timeLength":236},//现在正在播放的歌曲
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


