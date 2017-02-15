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
