import React, { memo, useCallback, useEffect,useState } from 'react'
import {  Spin} from 'antd';
import { queryBlogListPage } from '../../../../service/atricle'
import { BlogListWrapper } from './style';
import { useHistory } from 'react-router-dom';
import { parseDate } from '@/utils/time.js'

export default memo(function BlogList(props) {

  const [articleList=[], setArticleList] = useState([])
  const [isloading, setIsloading] = useState(false)
  const history = useHistory()
  
  const handleQuery = useCallback(()=>{
    setIsloading(true)
    queryBlogListPage({pageNum:0,pageSize:30}).then(res => {
      console.log('结果',res)
      if(res?.code === 200 ){
        setArticleList(res.data)
      }
      setIsloading(false)
    }).catch(err => {
      debugger
      console.log('err:',err)
    })
  },[])
  useEffect(()=>{
    handleQuery()
  },[handleQuery])

  const itemClick = useCallback((id)=>{
    history.push(`/home/blogdetail/${id}`)
  },[history])
  return (
    <BlogListWrapper>
      <h2>博客列表</h2>
      <Spin spinning={isloading} size="large">
        <div className="list">
          {
            articleList.map(item => {
              return (
                <div className="item" key={item.id} onClick={e => itemClick(item.id)}>
                  <div className="title text-nowrap">{item.title}</div>
                  <div className='info'>
                    <div className='keywords text-nowrap'>关键字：{item.keywords}</div>
                    <div className="type text-nowrap">类型：{item.type}</div>
                  </div>
                  <div className='other-info'>
                    <span>作者:{item.userId}</span>
                    <span>更新时间:{parseDate(item.editTime)}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Spin>
      
    </BlogListWrapper>
  )
})
