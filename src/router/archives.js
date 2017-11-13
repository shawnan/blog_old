import Posts from '../pages/archives/Posts'
import Tags from '../pages/archives/Tags'

const routers = [{
        path: 'Posts',
        name: 'Posts',
        component: Posts
    }, {
        path: 'Tags',
        name: 'Tags',
        component: Tags
    }
]

export default routers
