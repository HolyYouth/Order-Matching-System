// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios'


Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  window.document.body.style.backgroundColor='rgb(61, 125, 141)'//'#103069'
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    var token=parseInt(window.sessionStorage.getItem('token'))
    if (parseInt(token)===1){
      next() 
    }else{
        next({
          path:'/Login',
          query: {query: {redirect: to.fullPath}}
        })
    }
  }else{
    next()
  }
 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
