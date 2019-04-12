<template>
  <div class="hello">
     这里是stort----->{{this.$store.state.count}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
	mounted(){
		console.log("进行获取相应的数据");
		var aa = this.$getValue('helloword');
		console.log(aa);
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
