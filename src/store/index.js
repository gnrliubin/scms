import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)   //放在main.js中无效

const state={
  count:0,
  asideIsCollapse:false,
}


const store = new Vuex.Store({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    // asideCollapse(state){
    //   state.asideIsCollapse=!state.asideIsCollapse
    // }
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