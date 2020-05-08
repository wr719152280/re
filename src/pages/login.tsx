import React, { useState } from 'react'
import { Button, message } from 'antd'
import { RouteChildrenProps, Link } from 'react-router-dom';
import usersApi from '../apis/users';
import {hash} from 'spark-md5'
import { useDispatch } from 'react-redux';
import { changeConfig } from '../store/action';

interface ILoginData{
    name:string
    password:string
}


const Login = (props:RouteChildrenProps) => {
    const [userNameFocus,setUserNameFocus] = useState<boolean>(false)
    const [passwordFocus,setPasswordFocus] = useState<boolean>(false)
    const [userName,setUserName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [loading,setLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const login = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!userName){
            message.error('请输入用户名')
            return
        }
        if(!password){
            message.error('请输入密码')
            return
        }
        setLoading(true)
        usersApi.login(userName,hash(password)).then((res)=>{
            setLoading(false)
            if(res.data.data && res.data.success){
                dispatch(changeConfig(res.data.data))
                props.history.push('/')
            }else{
                message.error(res.data.error.title)
            }
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }
    return (
        <div className="login-page">
            <form className="login-main" onSubmit={login} name='loginForm'>
                <h1>Login</h1>
                <div className="txtb">
                    <input 
                        type="text" 
                        onFocus={() => setUserNameFocus(true)} 
                        onBlur={() => setUserNameFocus(userName.length > 0)} 
                        className={userNameFocus ? 'focus' : ''}
                        value={userName}
                        onChange={(event)=>setUserName(event.target.value)}
                    />
                    <span data-placeholder="UserName"></span>
                </div>
                <div className="txtb">
                    <input 
                        type="password" 
                        onFocus={() => setPasswordFocus(true)} 
                        onBlur={() =>  setPasswordFocus(password.length > 0)} 
                        className={passwordFocus ? 'focus' : ''}
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                    />
                    <span data-placeholder="PassWord"></span>
                </div>
                <Button htmlType="submit" className="login-btn" loading={loading}>Login</Button>
                <div className="bottom-text">
                    Don't have account? <Link to="/">Sing up</Link>
                </div>
            </form>
        </div>
    )
}

export default Login