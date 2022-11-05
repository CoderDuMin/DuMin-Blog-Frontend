import request from './request'

// 上传图片
export function uploadImage(file){
    let dataform = new FormData()
    dataform.append('image',file)
    return request({
        url:'/upload/image',
        method:'post',
        data:dataform
    })
}