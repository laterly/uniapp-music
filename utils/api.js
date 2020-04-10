import request from "./request.js";
import {mUrl,aUrl,wwwapiUrl,msearchcdnUrl,mobileserviceUrl} from './config.js'
console.log('request',request);
/* 获取新歌 */
function getNewSongs() {
	return request.get(mUrl+'/?json=true');
}
 /* 获取排行榜 */
function getRank() {
    return request.get(mUrl+"/rank/list&json=true");
}
function getRank2() {
    return request.get(aUrl+"/api/v3/rank/list?version=9108&plat=0&&parentid=0&apiver=6&area_code=1&withsong=1");
}
/* 获取排行榜下歌曲列表 */
 function getRankSongList(par) {
    return request.get(mUrl+"/rank/info/", par);
  }

  /* 获取歌单列表 */
 function getSongMenu(par) {
    return request.get(mUrl+"/plist/index&json=true", par);
  }

  /* 获取歌单歌曲列表详情 */
  function getSongMenuDetails(par) {
    return request.get(mUrl+"/plist/list/" + par + "?json=true");
  }

  /* 获取歌手分类 */
  function getSingerClassify() {
    return request.get(mUrl+"/singer/class&json=true");
  }

  /* 获取歌手分类下面的歌手列表 */
  function getSingerList(par) {
    return request.get(
      mUrl+"/singer/list/" + par.classid + "?json=true&page=" + par.page
    );
  }

  /* 歌手信息 */
  function getSingerInfo(par) {
    return request.get(
      mUrl+"/singer/info/" + par.singerid + "?json=true&page=" + par.page
    );
  }
function getSearchKey(par) {
    return request.get(msearchcdnUrl+"/new/app/i/search.php?cmd=302",par);
  }
  // http://mobileservice.kugou.com/api/v3/lyric/search?version=9108&highlight=1&keyword=你好&plat=0&pagesize=20&area_code=1&page=1&with_res_tag=1
  function getSearchKey2(par) {
      return request.get(mobileserviceUrl+"/api/v3/lyric/search?version=9108&highlight=1&keyword=你好&plat=0&pagesize=20&area_code=1&page=1&with_res_tag=1");
    }
  /* 热门搜索列表 */
  function getHotSearch() {
    return request.get(aUrl+"/api/v3/search/hot?format=json&plat=0&count=30");
  }

  /* 音乐搜索 */
  function getSongSearch(par) {
    return request.get(aUrl+"/api/v3/search/song",par);
  }

  /* 音乐详情 */
  function getSongDetails(par) {
    return request.get(wwwapiUrl+"/yy/index.php?r=play/getdata", par);
  }
  function getSongDetails3(){
	   return request.get('http://music.eleuu.com/song/url?id=33894312');
  }
  function getSongDetails2(par) {
    return request.get(mUrl+"/app/i/getSongInfo.php?cmd=playInfo", par);
  }
export {
	getNewSongs,
	getRank,
	getRank2,
	getRankSongList,
	getSongMenu,
	getSongMenuDetails,
	getSingerClassify,
	getSingerList,
	getSingerInfo,
	getHotSearch,
	getSongSearch,
	getSongDetails,
	getSongDetails2,
	getSearchKey,
	getSearchKey2,
	getSongDetails3
}
