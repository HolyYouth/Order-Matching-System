import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Product from '@/components/Product'
import ProductInfo from '@/components/ProductInfo'
import ProductHisOrder from '@/components/ProductHisOrder'
Vue.use(Router)

// const signin = r => require.ensure([], () => r(require('@/components/Signin')), 'signin');


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    children:[{
      path:'/signin',
      name:'Signin',
      component:Signin
    },{
      path:'/signup',
      name:'Signup',
      component:Signup
    }
  ]
  },
  {
    path:'/product',
    name:'Product',
    component: Product,
    children:[{
      path:'/productInfo',
      name:'ProductInfo',
      component:ProductInfo
    },{
      path:'/productHisOrder',
      name:'ProductHisOrder',
      component:ProductHisOrder
    }]
  }
]

export default new Router({
  routes
})
