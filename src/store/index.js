import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)   //放在main.js中无效

const state={
  count:0
}


const store = new Vuex.Store({
  state:state,
  mutations: {
    increment (state) {
      state.count++
    }
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