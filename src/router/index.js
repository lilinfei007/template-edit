import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path:'/project-edit',
    name:'projectEdit',
    component:() => import(/* webpackChunkName:"ProjectEdit" */ '../views/ProjectEdit.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]


console.log("1111111111111111");
console.log(routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
