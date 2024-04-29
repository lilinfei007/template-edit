import Vue from 'vue'
import App from './App.vue'
import router from './router'

let obj = {
  component:() => import('@/views/Index.vue')
}

console.log(obj);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
