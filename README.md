
**webpack与vue路由的应用**
=============
----------

vue2-route
---------------
主要记录的是vue route路由的应用
 


----------
**main.js**

> import Vue from 'vue';
import './index.css'
import App from './components/app.vue'
import VueRouter from 'vue-router'
//import store from './store/index.js';    //store
import routes from './route-config.js'
Vue.use(VueRouter);
//创建路由
const router = new VueRouter({
  mode: 'hash',    //路由的模式
  routes
});
new Vue({
	el:'#app', 
	router,
	render: h => h(App) 
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
//const app = new Vue({
//router
//}).$mount('#app')


----------
**app.vue**


    `<template>
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


    
-------

    
**nav.vue**

    `<template>
	 <div class="nav">
		<h2>{{message}}</h2>
			<span class="navd"><router-link to="/a">go to a</router-link></span>
			<span class="navd"><router-link to="/b">go to b</router-link></span>
			<span class="navd"><router-link to="/c">go to c</router-link></span>
			<!-----第二部分<------><br />
			<h2>{{message1}}</h2>
		 	<span class="navd"><router-link to="/dynamicNav/user/a">go to userA</router-link></span>
			<span class="navd"><router-link to="/dynamicNav/user/b">go to userb</router-link></span>
			<span class="navd"><router-link to="/dynamicNav/user/c">go to userc</router-link></span>
	</div>
	</template>
	<script>
	export default{
		data(){
			return {
				message:'简单的路由分配',
				message1:'动态路由的分配'
			}
		}
	}
	</script>
    

-------

**head.vue**

  

    <template>
	<div class="head">
		<h2>{{message}}</h2>
	</div>
	</template>
	<script>
	export default{
		data(){
			return {
				message:'我是头部',
			}
		}
	}
	</script>

--------------------------
**dynamicNav.vue**

    <template>
	<div class="navd">
		<h2>{{message}}</h2>
			<div>User {{ $route.params.id}}</div>
	</div>
	</template>
	<script>
	export default{
		data(){
			return {
				message:'动态路由的地址',
			}
		}
	}
	</script>
	

 

下面是 项目的目录
![项目的根目录](https://github.com/zhoupeihuang/vue2_route/blob/master/aax.png)


展示效果 如下如![enter image description here](https://github.com/zhoupeihuang/vue2_route/blob/master/demo2.gif)




 
