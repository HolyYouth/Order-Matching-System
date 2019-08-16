import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/Product'
import ProductList from '@/components/ProductList'
import UserOrderList from '@/components/UserOrderList'
import Login from '@/components/Login'
Vue.use(Router)

// const signin = r => require.ensure([], () => r(require('@/components/Signin')), 'signin');


const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      keepAlive:false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: ProductList,
  },
  {
    path:'/product',
    name:'Product',
    component:Product,
    // children:[{
    //   path:'/chart',
    //   name:'ProdPriceChart',
    //   component:ProdPriceChart
    // }]
  },
  {
    path: '/userOrderList',
    name: 'userOrderList',
    component: UserOrderList,
    meta:{
      requireAuth:true
    }
  }
]

export default new Router({
  routes
})
