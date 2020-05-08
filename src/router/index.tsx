import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from '../pages/home';
import Header from '../layouts/header';
import { Layout, ConfigProvider } from 'antd';
import About from '../pages/about';
import Error from '../pages/error';
import Login from '../pages/login';
import zhCN from 'antd/es/locale/zh_CN';
import enGB from 'antd/es/locale/en_GB';
import { useSelector } from 'react-redux';
import { IReducer } from '../store/reducers';
import { LANG } from '../store/reducers/lang';
import Loading from '../components/loading';
import routerTypes from '../types/routerTypes';
import Xxx from '../pages/about/xxx';
import Aaa from '../pages/about/aaa';

const routerList:routerTypes.IRouter[] = [
    {
        path:'/',
        exact:true,
        component:Home,
        title:'首页',
        showNav:true,
        
    },
    {
        path:'/about',
        component:About,
        title:'关于我们',
        showNav:true,
        children:[
            {
                path:'/about/xxx',
                component:Xxx,
                title:'关于我们xxx',
                showNav:true,
            },
            {
                path:'/about/aaa',
                component:Aaa,
                title:'关于我们aaa',
                showNav:true,
            }
        ]
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
                    <Header routerList={routerList}></Header>
                    <Loading></Loading>
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
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default Root