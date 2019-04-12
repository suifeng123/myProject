import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//使用插件

export default new Vuex.Store({
	state: {
		count: 100  //增加一个状态
	},
	getter:{
		newCount(state){
			return state.count + 100
		}
	},
	mutations:{
		change(state){
			console.log(state.count);
			state.count += 10;
		}
	},
	actions:{
		change({commit}){
			//模拟异步
			setTimeout(() => {
				commit('change')
			},1000)
		}
	}
})