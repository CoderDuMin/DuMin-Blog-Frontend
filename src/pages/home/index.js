
import React, { memo } from 'react'


import { renderRoutes } from 'react-router-config'

import HomeHeader from '../../components/home-header'
import HomeFooter from '../../components/home-footer'

const BlogHome = memo((props) => {
  const {route} = props 
  console.log('====',route.routes)
  return (
    <div>
      <HomeHeader></HomeHeader>
      {
        renderRoutes(route.routes)
      }
      <HomeFooter></HomeFooter>
    </div>
  )
})

export default BlogHome