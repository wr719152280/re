import React from 'react'
import {Layout, Menu, Select} from 'antd'
import { Link, useHistory } from 'react-router-dom'
import {LANG} from '../store/reducers/lang'
import { useSelector, useDispatch } from 'react-redux'
import {changeLang} from '../store/action'
import { IReducer } from '../store/reducers'

interface IProps{
    lang:LANG
}

const Header = () => {
    const history = useHistory()
    const {lang} = useSelector<IReducer,IProps>(({lang}):IProps=>{
        return {
            lang:lang.lang
        }
    })
    const disPatch = useDispatch()
    if(history.location.pathname.indexOf('login') !== -1){
        return null
    }else{
        return (
            <Layout.Header>
                <div style={{float:'right'}}>
                    <Select value={lang} onChange={(value)=>disPatch(changeLang(value))}>
                        <Select.Option value={LANG.CH}>中文</Select.Option>
                        <Select.Option value={LANG.EN}>英文</Select.Option>
                    </Select>
                </div>
                <Menu style={{width:'80%'}} theme="dark" mode="horizontal" selectedKeys={[history.location.pathname]}>
                    <Menu.Item key="/"><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key="/about"><Link to='/about'>about</Link></Menu.Item>
                </Menu>
                
            </Layout.Header>
        )
    }
    
}

export default Header