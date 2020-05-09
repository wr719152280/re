import React from 'react'
import {Layout, Menu, Dropdown} from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IReducer } from '../store/reducers'
import usersApi from '../apis/users'


const Header = () => {
    const {currentUser} = useSelector<IReducer,any>(({config})=>{
        return config
    })
    const history = useHistory()
    
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
            </Layout.Header>
        )
    }
    
}

export default Header