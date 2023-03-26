import React, { memo,useState,useEffect } from 'react'
// import { Button} from 'antd';

import { LoginWrapper } from './style'
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { changeUserInfoAction } from './store/actionCreator';
import { login } from '../../service/login';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

const Login = memo(() => {

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loginVisible, setLoginVisible] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = useCallback(()=>{
    login(account,password).then(res => {
      if(res.data){
        dispatch(changeUserInfoAction(res.data))
        localStorage.setItem('token',res.token)
        history.replace({pathname:'/home'})
      }
        
      
    }).catch()
  },[dispatch,account,password,history])

  useEffect(() => {
   if(localStorage.getItem('token')){
    history.replace({pathname:'/home'})
   }else{
    window.location.href = 'http://1.117.247.44:5505/?#/login'
   }
  }, [history])
  

  return (
    <LoginWrapper>
        <div id="login-button" className={classNames({'active': !loginVisible})} onClick={e => setLoginVisible(true)}>
          <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt="">
          </img>
        </div>
        <div id="container" className={classNames({'active':loginVisible})}>
          <h1>点击登录</h1>
          <span className="close-btn" onClick={e => setLoginVisible(false)}>
            <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt=''></img>
          </span>
        
          <form>
            <input type="text" onChange={(e) => setAccount(e.target.value)} value={account} placeholder="请输入账号名" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="请输入密码" />
            {/* <div className='login-btn'  onClick={e => handleLogin()}>登录</div> */}
            {/* <div className='custom-btn btn-12'  onClick={e => handleLogin()}>登录</div> */}
            <button className="custom-btn btn-12"  onClick={e => handleLogin()}><span>登录</span><span>这里!</span></button>
          </form>
        </div>
        <div className='tips'>
          <p>游客账号:visitor</p>
          <p>密码:123456</p>
        </div>

      {/* <div className="container">
        <div className="top"></div>
        <div className="center">
          <h2>请登录</h2>
          <input type="text" onChange={(e) => setAccount(e.target.value)} value={account} placeholder="请输入账号名" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="请输入密码" />
          <Button type="primary" shape="round"  size="large" onClick={e => handleLogin()}>
            登录
          </Button>
        </div>
        <div className="bottom"></div>
      </div> */}
    </LoginWrapper>
  )
})

export default Login