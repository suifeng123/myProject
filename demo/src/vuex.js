let Vue = null;

class Store {
	constructor(options){
		let { state,getters,actions,mutations } = options;
		this.getters = {};
		this.mutations = {};
		this.actions = {};
		//vuex的核心就是借用vue的实例，因为vuex的数据
		this._vm = new Vue({
			data:{
				state
			}
		})
	}
	//访问state对象时候，就直接返回响应式的数据
	get state(){
		return this._vm.state
	}
}

//Vue.use(vuex)
const install = _Vue => {
	if(Vue === _Vue) return 
	Vue = _Vue 
	Vue.mixin({
		//通过mixins让每个组件实例化的时候都会执行下面的beforeCreate
		beforeCreate(){
			//只有跟节点才有store配置，所以这里只能走一次
			if(this.$options && this.$options.store){
				this.$store = this.$options.store
			}else if(this.$parent && this.$parent.$store){
				this.$store = this.$parent.$store 
			}
		}
	})
}