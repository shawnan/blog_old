import URL from '../libs/static'
import AdminRoot from '../pages/AdminRoot'
import Post from '../pages/Post'
import PostNew from '../pages/PostNew'

const routers = [
    {
        path: '/',
        name: 'AdminRoot',
        component: AdminRoot
    }, {
        path: 'Post',
        name: 'Post',
        component: Post
    }, {
        path: 'PostNew',
        name: 'PostNew',
        component: PostNew
    }
]

export default routers
