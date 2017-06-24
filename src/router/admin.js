import URL from '../libs/static'
import AdminRoot from '../components/AdminRoot'
import Post from '../components/Post'
import PostNew from '../components/PostNew'

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
