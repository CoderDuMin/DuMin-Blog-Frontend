/* eslint-disable import/no-anonymous-default-export */
import { Redirect } from 'react-router-dom'

import Login from '@/pages/login'
import Home from '@/pages/home'
import BlogList from '../pages/home/c-pages/blog-list'
import AddBlog from '../pages/home/c-pages/add-blog'
import BlogDetail from '../pages/home/c-pages/blog-detail'

export default [
  {
    path: "/",
    exact: true,
    render:()=>{
      return <Redirect to="/home"></Redirect>
  }
    
  },
  {
    path:'/login',
    exact:true,
    component:Login
  },
  {
    path:'/home',
    component:Home,
    routes:[
      {
        path: "/home",
        exact: true,
        render: () => (
          <Redirect to="/home/bloglist"/>
        )
      },
      {
        path: "/home/bloglist",
        component: BlogList
      },
      {
        path: "/home/addblog",
        component: AddBlog
      },
      {
        path: "/home/blogdetail/:id",
        component: BlogDetail
      },
    ]
  }
]