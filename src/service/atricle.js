import request from './request'

// 添加博客
export function addBlog(data){
    return request({
        url:'/article/add',
        method:'post',
        data:data
    })
}

// 添加博客
export function queryBlogListPage(queryParams){
  return request({
      url:'/article/publiclist',
      method:'get',
      params:queryParams
  })
}

// 添加博客
export function queryBlogDetail(id){
  return request({
      url:`/article/detail/${id}`,
      method:'get',
  })
}
// 删除博客
export function deleteBlog(id){
  return request({
      url:`/article/delete/${id}`,
      method:'delete',
  })
}