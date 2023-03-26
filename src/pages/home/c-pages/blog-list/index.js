import React, { memo, useCallback, useEffect,useState } from 'react'
import {  Spin,Dropdown,Modal,message} from 'antd';
import { EllipsisOutlined , ExclamationCircleOutlined} from '@ant-design/icons'
import { deleteBlog, queryBlogListPage } from '../../../../service/atricle'
import { BlogListWrapper } from './style';
import { useHistory } from 'react-router-dom';
import { parseDate } from '@/utils/time.js'

const { confirm } = Modal

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
  const handleEdit = useCallback((e,id)=>{
    e.stopPropagation()
    console.log('修改',id)
  },[])
  const handleDelete = useCallback((e,id)=>{
    e.stopPropagation()
    console.log('删除',id)
    if(id){
      confirm({
        title: '提示',
        icon: <ExclamationCircleOutlined />,
        content: '确定要删除这篇文章吗?',
        onOk() {
          deleteBlog(id).then(res => {
            message.success('删除成功');
            handleQuery()
          }).catch(err => {
            message.error('删除失败,错误原因：'+err.msg);
          })
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  },[handleQuery])
  return (
    <BlogListWrapper>
      <h2>博客列表</h2>
      <Spin spinning={isloading} size="large">
        <div className="list">
          {
            articleList.map(item => {
              return (
                <div className="item" key={item.id} onClick={e => itemClick(item.id)}>
                  <div className='header'>
                    <div className="title text-nowrap">{item.title}</div>
                    <Dropdown 
                      trigger={'hover'}
                      menu={
                        {items:[
                          {
                          label:(<div onClick={e => handleEdit(e,item.id)}>修改</div>),
                          key:'edit'
                          },
                          {
                            label:(<div onClick={e => handleDelete(e,item.id)}>删除</div>),
                            key:'del'
                            },
                        ]}
                      }
                    >
                      <EllipsisOutlined style={{fontSize:'24px'}}/>
                    </Dropdown>
                  </div>
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
