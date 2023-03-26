
import * as actionTypes from './constants'

export const changeUserInfoAction = (userinfo) => ({
  type:actionTypes.CHANGE_USEINFO,
  userInfo:userinfo
}) 

// export const loginAction = (account,password) => {
//   return dispatch => {
//     login(account,password).then(res => {
//       console.log('登录成功')
//       dispatch(changeUserInfoAction(res.data))
//       localStorage.setItem('token',res.token)
//       window.history.replaceState({},'','/#/home')
//     }).catch(err=>{
//       console.log(err);
//     })
//   }
// }