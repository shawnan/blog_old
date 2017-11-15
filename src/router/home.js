import Home from '../pages/home/Home'
import Post from '../pages/post/PostDetail'

const routers = [{
	path: '/',
	name: 'Home',
	component: Home
}, {
	path: '/post/:id',
	name: 'Post',
	component: Post
}];

export default routers;