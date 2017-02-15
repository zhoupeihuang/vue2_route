<template>
	<div class="app">
		<com-head></com-head><!--组件head-->
		<com-nav></com-nav><!--组件 nav-->
		<h2>{{message}}</h2>
		<!--<input type="text" v-model="message" />-->
		<router-view></router-view>
	</div>	
</template>
<script>
	//head会自动补全为head.vue
	import Head from './head/head'  //ES6 引入  如 ES5 var Head = require(./head/head.vue) 
	import Nav from './nav/nav'
	export default{ //默认输出
		components:{//组件
			comHead:Head,
			comNav:Nav,
		},
		data(){
			return {
				message:'我是入口的App文件入口'
			}
		}
	}
</script>
