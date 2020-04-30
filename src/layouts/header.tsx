import React from 'react'
import {Layout, Menu, Select} from 'antd'
import { Link, useHistory } from 'react-router-dom'
import {LANG} from '../store/reducers/lang'
import { useSelector, useDispatch } from 'react-redux'
import {changeLang} from '../store/action'
import { IReducer } from '../store/reducers'
import routerTypes from '../types/routerTypes'

interface IProps{
    lang:LANG
}

interface IHeaderProps{
    routerList:routerTypes.IRouter[]
}

const Header = (props:IHeaderProps) => {
    const history = useHistory()
    const {lang} = useSelector<IReducer,IProps>(({lang}):IProps=>{
        return {
            lang:lang.lang
        }
    })
    const disPatch = useDispatch()
    let keys =  props.routerList.filter(item=>{
        return history.location.pathname.includes(item.path)
    }).map(item=>{
        return {
            path:item.path
        }
    })
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