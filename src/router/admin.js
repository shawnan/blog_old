import AdminRoot from '../pages/admin/AdminRoot'
import PostNew from '../pages/admin/PostNew'

const routers = [
    {
        path: '/',
        name: 'AdminRoot',
        component: AdminRoot
    }, {
        path: 'PostNew',
        name: 'PostNew',
        component: PostNew
    }
]

export default routers
