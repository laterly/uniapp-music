import Vue from 'vue'
import App from './App'
import store from './vuex'
import path from './utils/path'
Vue.config.productionTip = false
Vue.prototype.path=path;
App.mpType = 'app'

const app = new Vue({
    ...App,
	path,
	store
	
})
app.$mount()
