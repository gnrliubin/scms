import Vue from "vue";
import Vuex from 'vuex';
import state from './state'
Vue.use(Vuex)   //放在main.js中无效

// const state={
//   asideIsCollapse:false,
// }


const store = new Vuex.Store({
  state,
  mutations: {
    
  }
})



// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })


export default store