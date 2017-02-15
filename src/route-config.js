import Home from './components/app'
import A from './components/a/a'
import B from './components/b/b'
import C from './components/c/c'
import User from './components/dynamicNav/dynamicNav'

//当然真正应用的路由不会这么简单，vue-router也提供动态路由，嵌套路由等等，详见vue-router文档
export default [
//	{path:'/',component:Home},
    {path:'/a',component:A},
	{path:'/b',component:B},
	{path:'/c',component:C},
	{path:'/dynamicNav/user/:id',component:User}
];