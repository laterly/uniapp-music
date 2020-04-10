export default {
	config:{
		header:{
			"Content-Type":"application/x-www-form-urlencoded"
		},
		data:{},
		method:'GET',
		dataType:'json'
	},
	request(options={}){
		options.header=options.header || this.config.header;
		options.method = options.method || this.config.method;
		options.dataType = options.dataType || this.config.dataType;
		return new Promise((reslove,reject)=>{
			uni.request(options).then(res=>{
				reslove(res[1])
			})
		})
	},
	get(url,data,options={}){
		options.url=url;
		options.data=data;
		options.method='GET';
		return this.request(options);
	},
	post(url,data,options={}){
		options.url=url;
		options.data=data;
		options.method='POST';
		return this.request(options);
	}
}