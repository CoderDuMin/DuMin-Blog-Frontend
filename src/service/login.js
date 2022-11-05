import request from './request'

// 登录
export function login(account,password){
    return request({
        url:'/auth/login',
        method:'post',
        data:{account,password}
    })
}