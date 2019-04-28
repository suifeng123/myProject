<template>
  <div class="hello">
     这里是stort----->{{this.$store.state.count}}
	 <div id="circle" style="width: 100px;height: 100px;"></div>
	 
	 
  </div>
</template>

<script>
export default {
	//定义一个组件
	
  name: 'HelloWorld',
	mounted(){
		console.log("进行获取相应的数据");
		var aa = this.$getValue('helloword');
		console.log(aa);
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  message:"from parent"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#circle{
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}
</style>
