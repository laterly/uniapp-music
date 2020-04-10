function update(){
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
	    uni.request({  
	        url: 'http://www.example.com/update/',  
	        data: {  
	            version: widgetInfo.version,  
	            name: widgetInfo.name  
	        },  
	        success: (result) => {  
	            var data = result.data;  
	            if (data.update && data.wgtUrl) {  
	                uni.downloadFile({  
	                    url: data.wgtUrl,  
	                    success: (downloadResult) => {  
	                        if (downloadResult.statusCode === 200) {  
	                            plus.runtime.install(downloadResult.tempFilePath, {  
	                                force: false  
	                            }, function() {  
	                                console.log('install success...');  
	                                plus.runtime.restart();  
	                            }, function(e) {  
	                                console.error('install fail...');  
	                            });  
	                        }  
	                    }  
	                });  
	            }  
	        }  
	    });  
	});  
	// #endif
}

//空对象判断
function isEmptyObject(o) {
  if (typeof o == 'object' && o !== null) {
    for (var i in o) {
      return false
    }
    return true
  }
  return false
}


//argsObj转queryString
function stringifyQuery(argsObj){
  if(typeof argsObj !== 'object' || argsObj == null || isEmptyObject(argsObj)){
    return
  }
  let queryArr = []
  for(let key in argsObj){
    queryArr.push(`${key}=${argsObj[key]}`)
  }
  console.log('queryArr',queryArr)
  return queryArr.join('&')
}


/**
 * 可以用于把数组分成几份。
 */
function splitArrary(arr, len) {
    var arrLen = arr.length;
    var newArr = [];
    for (var i = 0; i < arrLen; i += len) {
        newArr.push(arr.slice(i, i + len));
    }
    return newArr;
}

/*防抖*/
function debounce(fn, delay = 300) {   //默认300毫秒
        var timer;
        return function() {
            var args = arguments;
            if(timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(this, args);   // this 指向vue
            }, delay);
        };
    }
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
export {
	update,
	isEmptyObject,
	stringifyQuery,
	splitArrary,
	debounce,
	addZero
}