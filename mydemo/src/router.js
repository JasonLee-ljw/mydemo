import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import List from './views/List.vue'
import User from './views/User.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name:'Login',
      component: Login
    },
    {
        path: '/Info',
        name:'Info',
        component: Info
      },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'List',
                name: 'List',
                component: () => import(/* webpackChunkName: "List" */ './views/List.vue')
            },
            {
                path: 'User',
                name: 'User',
                component: () => import(/* webpackChunkName: "User" */ './views/User.vue')
            } 
        ]
      },
      {
          path: '/Add',
          name: 'Add',
          component: () => import(/* webpackChunkName: "Add" */ './views/Add.vue')
      }
    // {
    //   // path: '/',
    //   // name: '',
    //   // // route level code-splitting
    //   // // this generates a separate chunk (about.[hash].js) for this route
    //   // // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
