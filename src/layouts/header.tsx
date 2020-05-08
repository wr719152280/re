import React from 'react'
import {Layout, Menu, Dropdown} from 'antd'
import { Link, useHistory } from 'react-router-dom'
import routerTypes from '../types/routerTypes'
import { useSelector } from 'react-redux'
import { IReducer } from '../store/reducers'
import usersApi from '../apis/users'

interface IHeaderProps{
    routerList:routerTypes.IRouter[]
}

const Header = (props:IHeaderProps) => {
    const {currentUser} = useSelector<IReducer,any>(({config})=>{
        return config
    })
    const history = useHistory()
    let keys =  props.routerList.filter(item=>{
        return history.location.pathname.includes(item.path)
    }).map(item=>{
        return {
            path:item.path
        }
    })
    const exit = () => {
        usersApi.exit()
        history.push('/login')
    }
    if(history.location.pathname.indexOf('login') !== -1){
        return null
    }else{
        const menu = (
            <Menu>
                <Menu.Item onClick={exit}>退出</Menu.Item>
            </Menu>
            )
        return (
            <Layout.Header>
                {
                    currentUser && <div style={{float:'right'}}>
                    <Dropdown overlay={
                        menu
                    }>
                        <div style={{color:'#fff',cursor:'pointer'}}>{currentUser.nickName}</div>
                    </Dropdown>
                    </div>
                }
                
                <Menu style={{width:'80%'}} theme="dark" mode="horizontal" selectedKeys={[keys[keys.length - 1].path]}>
                        {
                            props.routerList.filter(item=>item.showNav).map(item=>{
                                return (
                                    <Menu.Item key={item.path}><Link to={item.path}>{item.title}</Link></Menu.Item>
                                )
                            })
                        }
                </Menu>
            </Layout.Header>
        )
    }
    
}

export default Header