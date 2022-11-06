import request from './request'

// 添加博客
export function addBlog(data){
    return request({
        url:'/article/add',
        method:'post',
        data:data
    })
}