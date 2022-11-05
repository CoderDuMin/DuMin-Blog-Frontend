/* eslint-disable import/no-anonymous-default-export */

import Login from '@/pages/login'
import Home from '@/pages/home'

export default [
  {
    path: "/",
    exact: true,
    component:Home
  },
  {
    path:'/login',
    exact:true,
    component:Login
  },
  {
    path:'/home',
    exact:true,
    component:Home
  }
]