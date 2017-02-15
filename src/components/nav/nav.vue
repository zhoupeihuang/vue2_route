<template>
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
