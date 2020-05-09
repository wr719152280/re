import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from '../pages/home';
import Header from '../layouts/header';
import { Layout, ConfigProvider} from 'antd';
import Error from '../pages/error';
import Login from '../pages/login';
import zhCN from 'antd/es/locale/zh_CN';
import enGB from 'antd/es/locale/en_GB';
import { useSelector } from 'react-redux';
import { IReducer } from '../store/reducers';
import { LANG } from '../store/reducers/lang';
import Loading from '../components/loading';
import routerTypes from '../types/routerTypes';
import Light from '../pages/light';
import SideBar from '../layouts/sideBar';
import {PieChartOutlined,DesktopOutlined,NotificationOutlined} from '@ant-design/icons'
import Three from '../pages/three';

const routerList:routerTypes.IRouter[] = [
    {
        path:'/',
        exact:true,
        component:Home,
        title:'首页',
        showNav:true,
        icon:<PieChartOutlined />
    },
    {
        path:'/light',
        exact:true,
        component:Light,
        title:'镁光灯',
        showNav:true,
        icon:<DesktopOutlined />
    },
    {
        path:'/three',
        exact:true,
        component:Three,
        title:'牛逼效果',
        showNav:true,
        icon:<NotificationOutlined />
    },
    {
        path:'/login',
        exact:true,
        component:Login,
        title:'登录'
    },
    {
        path:'*',
        component:Error,
        title:'404'
    }
]

const langs = {
    'ch':zhCN,
    'en':enGB
}

interface IProps{
    lang:LANG
    config:any
}

const Root = () => {
    const {lang,config} = useSelector<IReducer,IProps>(({lang,config}):IProps=>{
        return {
            lang:lang.lang,
            config
        }
    })
    
    useEffect(()=>{
        if(!window.location.href.includes('login') && !config.currentUser){
            window.location.href = '/login'
        }
    },[config])
    
    return (
        <ConfigProvider locale={langs[lang] || zhCN}>
            <BrowserRouter>
                <Layout>
                    <Header></Header>
                    <Loading></Loading>
                    <Layout style={{height:'calc(100vh - 64px)'}}>
                        <SideBar routerList={routerList}></SideBar>
                        <Layout.Content>
                        <Switch>
                            {
                                routerList.map((route)=>{
                                    return (
                                        <Route 
                                            path={route.path} 
                                            exact={route.exact} 
                                            key={route.path}
                                            render={(props:routerTypes.IRouterProps)=>{
                                                props.childrenRouters = route.children
                                                document.title = route.title
                                                return <route.component {...props as any}></route.component>
                                            }}
                                        />
                                    )
                                })
                            }
                        </Switch>
                        </Layout.Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default Root