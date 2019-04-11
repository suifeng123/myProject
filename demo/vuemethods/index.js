//引入相应的方法
import method from './method.js';

export default {
	//进行开发插件
   install: function(Vue){
	   method.install(Vue);//调用这个函数
   }
}