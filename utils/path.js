import { stringifyQuery, isEmptyObject } from './lib.js'
const decodePathParams = (method) => {
	return function(path = 'index', args = {}) {
		return new Promise((success, fail) => {
			let url = pathToUrl(path,args)
			url?uni[method]({ url, success, fail }):fail('找不到对应path地址')
		})
	}
}
export default {
	navigateTo: decodePathParams('navigateTo'),
	redirectTo: decodePathParams('redirectTo'),
	switchTab: decodePathParams('switchTab'),
	reLaunch: decodePathParams('reLaunch')
}

const pathToUrl = function(path,args = {}){
	if(!path){
		return false
	}
	let url
	if (!args || isEmptyObject(args)) {
		url = path
	} else {
		for(let key in args){
			let value = args[key]
			if(value!==null && typeof value == 'object'){
				args[key] = JSON.stringify(value)
			}
		}
		url = `${path}?${stringifyQuery(args)}`;
		console.log('url',url);
	}
	return url
}

export {
	pathToUrl
}
