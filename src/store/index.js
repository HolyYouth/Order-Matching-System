import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    products: [],
    orders:[],
    userId:'',
    logStatus:window.sessionStorage.getItem('logStatus'),
    baseURL:"http:192.168.43.225:8080",
    user: window.sessionStorage.getItem('user'),
    token:window.sessionStorage.getItem('token'),
    login_to:'Home'
    //要设置的初始属性值
};
function storeLocalStore (state) {
    window.localStorage.setItem("userMsg",JSON.stringify(state));
  }
const getters = {   //实时监听state值的变化(最新状态)
    getStockList(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.showFooter
    }
};
const mutations = {
    STORE_PRODUCTS(state,prodList){
        state.products = prodList;
        storeLocalStore (state)
    },
    setStockList(state,stockList) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.stocks = stockList;
    },
    SET_TOKEN: (state, data) => {
        window.sessionStorage.setItem('token',data)
        window.sessionStorage.setItem('logStatus',data==null)
        state.token =data
        state.logStatus = data==null
    },
    SET_USER: (state, data) => {
        window.sessionStorage.setItem('user',data)
        state.user = data
    },  
    //登出
    LOGOUT: (state) => {
         // 登出的时候要清除token
        state.token = null
        state.user = null
        state.login_to='Home'
        window.sessionStorage.setItem('token',null)
        window.sessionStorage.setItem('user',null)
        window.sessionStorage.setItem('logStatus',false)
    },
    setLogin_to:(state,data)=>{
        state.login_to=data
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    plugins:[createPersistedState({
        storage:window.sessionStorage
    })]
   });
// const getters = { //实时监听state值的变化(最新状态)
//     products:state=>{
//         return state.products
//     }


// };
// const mutations = {


    
// setStockList(state,stockList) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
// state.stocks = stockList;
// }
// };
// const store = new Vuex.Store({
// state,
// // getters,
// mutations
// });

export default store;