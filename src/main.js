// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import AdminRoutes from './router/admin'
import Root from './components/Root'
import Admin from './components/Admin'

// import URL from './libs/static'
// import Common from './libs/common'
// import Vuex from 'vuex'

Vue.config.productionTip = false

// Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.interceptors.push(function(request, next) {
//     next();
// });

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Root',
        component: Root
    }, {
        path: '/Admin',
        name: 'Admin',
        component: Admin,
        children: AdminRoutes
    }]
})

// const store = new Vuex.Store({
//     state: {
//     },
//     mutations: {
//     }
// })


// router.beforeEach((to, from, next) => {
//     store.commit('updateLoadingStatus', true);
//     // 正则匹配URL
//     // 1、普通页面 ?xxx
//     // 2、文档页面 ?Document-AppDevelop
//     // 3、带参数的页面 ?xxx/xxx
//     var fullUrl = decodeURIComponent(to.fullPath);
//     var paramIndex = fullUrl.indexOf('&');
//     if (paramIndex > -1){
//         fullUrl = fullUrl.substring(0, paramIndex);
//     }

//     // 当返回到菜单进入的页面时，再点一次返回就关闭页面，返回微信
//     if ((from.fullPath.indexOf('/home/AppStore') !== -1 && to.fullPath.indexOf('/home?AppStore') !== -1) ||
//         (from.fullPath.indexOf('/home/UserCenter') !== -1 && to.fullPath.indexOf('/home?UserCenter') !== -1) ||
//         (from.fullPath.indexOf('/home/DeveloperManager') !== -1 && to.fullPath.indexOf('/home?DeveloperManager') !== -1) ||
//         (from.fullPath.indexOf('/home/SystemList') !== -1 && to.fullPath.indexOf('/home?SystemList') !== -1) ||
//         (from.fullPath.indexOf('/home/DocList') !== -1 && to.fullPath.indexOf('/home?DocList') !== -1) ||
//         (from.fullPath.indexOf('/home/Register') !== -1 && to.fullPath.indexOf('/home?Register') !== -1) ){
//         wx.closeWindow();
//         store.commit('updateLoadingStatus', false);
//     }

//     if (fullUrl.indexOf('?') !== -1){
//         var url = fullUrl.split('?')[1];
//         // 先去掉微信里面自动加上的等号=
//         var index = url.indexOf('=');

//         if (index !== -1){
//             url = url.split('=')[0];
//         }
//         if (url.indexOf('/') !== -1){
//             // 带参数的
//             // UserPay
//             var arr = url.split('/');
//             var path = arr[0];
//             var paramValue = arr[1];
//             var index = paramValue.indexOf('=');
//             if (index !== -1){
//                 paramValue = paramValue.split('=')[0];
//             }

//             if (url.indexOf('UserPay') !== -1){
//                 next({
//                     path: URL.RootURL + '/' + path + '/' + paramValue
//                 })
//             } else if (url.indexOf('DocumentDetail') !== -1){
//                 next({
//                     path: URL.RootURL + '/' + path + '/' + paramValue
//                 })
//             } else {
//                 next({
//                     path: URL.RootURL + '/' + path + '/' + paramValue
//                 })
//             }
//         } else if (url.indexOf('DocList') !== -1){
//             var arr = url.split('DocList');
//             var path = arr[0];
//             var paramValue = arr[1];
//             next({
//                 path: URL.RootURL + '/DocList/' + paramValue
//             });
//         } else {
//             next({
//                 name: url
//             })
//         }
//     } else {
//         if (fullUrl.indexOf('UserPay') !== -1){
//             next();
//         }
//         if (fullUrl == '/'){
//             next({
//                 name: 'AppStore'
//             });
//         }
//         if (fullUrl.indexOf('AppStore') !== -1){
//             next();
//         } else if (fullUrl.indexOf('Register') !== -1){
//             next();
//         } else if (fullUrl.indexOf('Document') !== -1 || fullUrl.indexOf('DocList') !== -1){
//             next();
//         } else {
//             next();
//             var url = URL.GetUserinfo;
//             var data = {
//                 sid: Common.getSid()
//             };
//             $.ajax({
//                 url: url,
//                 data: data,
//                 type: 'POST',
//                 success: function(data){
//                     if (data && data.mobile && data.mobile.length > 2){
//                         next();
//                     } else {
//                         next({
//                             name: 'Register'
//                         });
//                     }
//                 },
//                 error: function(response){
//                     console.info(response);
//                 }
//             });
//         }
//     }
// })

// $.ajaxSetup({
//     timeout: 120000,
//     dataFilter: function (data, type){
//         return ajaxDataFilter(data,type);
//     },
//     error:  function (xhr, status, e) {
//         ajaxError(xhr, status, e);
//     },
//     beforeSend: function (xhr) {
//         ajaxBeforeSend(xhr);
//     },
//     complete: function (xhr, status) {
//         ajaxComplete(xhr, status);
//     }
// });

// function ajaxBeforeSend () {
//     // 禁用按钮
//     store.commit('updateSubmitBtnStatus', true);
// }

// function ajaxComplete (xhr, status) {
//     if (status == 'timeout') {
//         var msg = '当前网络异常，请稍候再试。';
//         Vue.$vux.alert.show({
//             title: '提示',
//             content: msg,
//         });
//         store.commit('updatePayLoadingStatus', false); // 关闭"正在付款..."提示
//         store.commit('updatePayStatus', false); // 关闭付款状态
//     }
//     store.commit('updateSubmitBtnStatus', false);
// }

// function ajaxError(xhr, status, e) {
//     if (status == 'timeout'){
//         // 超时已经在Complete中处理
//     }
//     var msg = '当前网络异常，请稍候再试。';
//     Vue.$vux.alert.show({
//         title: '提示',
//         content: msg,
//     });
//     store.commit('updateSubmitBtnStatus', false);
//     store.commit('updatePayLoadingStatus', false); // 关闭"正在付款..."提示
//     store.commit('updatePayStatus', false); // 关闭付款状态
// }

// /*Ajax请求返回值过滤器*/
// function ajaxDataFilter(data, type){
//     try {
//         if ( typeof(data) != "string"){
//               return data;
//         }

//         var noLoginStr = '尚未登录或登录已经超时';
//         if (data.indexOf(noLoginStr) !== -1){
//             var msg = '页面失效，请返回微信聊天窗口重新打开菜单！';
//             Vue.$vux.alert.show({
//                 title: '提示',
//                 content: msg,
//             });
//             return null;
//         }

//         var err404 = "<title>404，您访问的页面不存在。</title>";
//         if (data.indexOf(err404) != -1) {
//             var msg = '您访问的页面不存在。';
//             Vue.$vux.alert.show({
//                 title: '提示',
//                 content: msg,
//             });
//             return null;
//         }

//         var err500 = "<title>500，网络异常。</title>";
//         if (data.indexOf(err500) != -1) {
//             var msg = '网络繁忙，请稍候再试！';
//             Vue.$vux.alert.show({
//                 title: '提示',
//                 content: msg,
//             });
//             return null;
//         }

//         var obj = eval("("+data+")");
//         if (typeof(obj) != "object") {
//              return data;
//         }
//         if (typeof(obj.RetCode) != "string") {
//             return data;
//         }
//         if (obj.RetCode=="-1") {
//             var msg = obj.RetMsg || '网络繁忙，请稍候再试！';
//             Vue.$vux.alert.show({
//                 title: '提示',
//                 content: msg,
//             });
//             return null;
//         }
//         return data;
//     } catch(e) {
//         return data;
//     }
// };

// FastClick.attach(document.body)

// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

