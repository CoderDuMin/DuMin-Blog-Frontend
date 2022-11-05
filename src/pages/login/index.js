import React, { memo,useState } from 'react'
import { Button} from 'antd';

import { LoginWrapper } from './style'
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { changeUserInfoAction } from './store/actionCreator';
import { login } from '../../service/login';
import { useHistory } from 'react-router-dom';

const Login = memo(() => {

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = useCallback(()=>{
    login(account,password).then(res => {
      dispatch(changeUserInfoAction(res.data))
      localStorage.setItem('token',res.token)
      history.replace({pathname:'/home'})
    })
  },[dispatch,account,password,history])

  return (
    <LoginWrapper>
      <div className="container">
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
      </div>
    </LoginWrapper>
  )
})

export default Login