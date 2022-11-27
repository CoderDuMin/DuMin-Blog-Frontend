import React, { memo } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { HeaderWrapper } from './style'

import { useSelector } from 'react-redux'
import { useCallback } from 'react'

export default memo(function HomeHeader() {
  const {userInfo={}}  = useSelector((state)=>({
    userInfo:state.getIn(['user','userInfo'])
  }))
  const history = useHistory()
  console.log('用户信息',userInfo);
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

  const logOut = useCallback(()=>{
    localStorage.clear()
    history.replace({pathname:'/login'})
  },[history])
  return (
    <HeaderWrapper>
      <div className="left">督名的博客</div>
      <div className="right">
        {
          discoverMenus.map(item => {
            return (
              <div key={item.link} className="item">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })
        }
        <div className='userInfo'>
          {userInfo?.nickname}
          <span onClick={e => logOut()}>(注销)</span>
        </div>
      </div>
    </HeaderWrapper>
  )
})
