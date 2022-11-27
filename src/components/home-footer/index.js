import React, { memo } from 'react'
import { FooterWrapper } from './style'

export default memo(function HomeFooter() {

  return (
    <FooterWrapper>
      <p>本博客仅供个人学习记录使用,禁止用作其他用途</p>
      <p>备案号:闽ICP备2022015932号</p>
    </FooterWrapper>
  )
})
