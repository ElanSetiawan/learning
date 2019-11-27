import Vue from 'vue'
import Router from 'vue-router'
import AppConten from '@/pages/layout/AppConten'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import list from '@/pages/list'
import Part from '@/pages/part'
import Login from '@/pages/login'
import NotFound from '@/pages/NotFound'
// user
import Profil from '@/pages/user/profil'
import changePass from '@/pages/user/changePass'
import Layout from '@/pages/user/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {
      path: '/',
      component: AppConten,
      children: [
        {
          path: '/',
          name: 'Home',
          components: {
            default: Home
          }
        },
        {
          path: 'list',
          name: 'list',
          components: {
            default: list
          }
        },
        {
          path: 'login',
          name: 'Login',
          components: {
            default: Login
          }
        },
          {
          path: 'halaqah::id',
          name: 'Detail',
          meta: {
              requiresAuth: true
          },
          components: {
            default: Detail
          }
        },
        {
          path: 'part::id',
          name: 'part',
          meta: {
              requiresAuth: true
          },
          components: {
            default: Part
          }
        },
        {
          path: 'user',
          meta: {
            requiresAuth: true
          },
          components:  {
            default: Layout
          },
          children: [
            {
              path: '/',
              name: 'Profil',
              components: {
                default: Profil
              }
            },
            {
              path: 'changePass',
              name: 'changePass',
              components: {
                default: changePass
              }
            },
          ]
        },
      ]
    },
    {
      path: '/*',
      component: NotFound,
    }
  ]
})
