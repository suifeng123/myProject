var method = {};

method.install = function(Vue){
	//调用这个函数  此种使用Vue中的函数  在Vue中的prototype的中  在
	/**
	 * 在Vue中的原型上增加这个函数
	 * 在Vue源码中是这样使用Vue.use这个方法的
	 * Vue.use = function(plugin){
		 /**
		  * 这个Plugin是一个对象
		  */
		 /*
		 this.installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
		 if(installedPlguins.indexOf(plugin) > -1){
			 return this
		 }
		 var args = toArray(arguments,1);
		 args.unshift(this);
		 if(typeof plugin.install)
         */
	 
	//由于Vue是一个对象
	console.log(Vue);
	Vue.prototype.$getValue = (value) => {
		console.log(value);
		return value;
	}
}

export default method;