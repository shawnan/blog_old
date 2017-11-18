// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Index from './pages/home/Index'
import IndexRoutes from './router/home'
import Archives from './pages/archives/Archives'
import ArchivesRoutes from './router/archives'
import Post from './pages/post/Post'
import PostRoutes from './router/post'
import AdminRoutes from './router/admin'
import Admin from './pages/admin/Admin'

// import URL from './libs/static'
// import Common from './libs/common'


import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.interceptors.push(function(request, next) {
//     next();
// });

const router = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        children: IndexRoutes
    }, {
        path: '/archives',
        name: 'Archives',
        component: Archives,
        children: ArchivesRoutes
    }, {
        path: '/post',
        name: 'Post',
        component: Post,
        children: PostRoutes
    }, {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: AdminRoutes
    }]
})

const store = new Vuex.Store({
  state: {
    menuopen: false
  },
  mutations: {
    updateMenuStatus (state, menuopen) {
      state.menuopen = menuopen;
    }
  }
})

// FastClick.attach(document.body)

// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

