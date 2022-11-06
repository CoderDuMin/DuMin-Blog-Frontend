import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

export default memo(function HomeHeader() {
  const discoverMenus = [
    {
      title: "博客列表",
      link: "/home/bloglist"
    },
    {
      title: "添加博客",
      link: "/home/addblog"
    }
  ]
  return (
    <HeaderWrapper>
      <div className="left">督名的博客</div>
      <div className="right">
        {
          discoverMenus.map(item => {
            return (
              <div key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })
        }
      </div>
    </HeaderWrapper>
  )
})
