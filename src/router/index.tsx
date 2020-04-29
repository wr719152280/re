import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

const routerList = [
    {
        path:'/',
        exact:true,
        component:Home,
        title:'首页'
    },
    {
        path:'/about',
        exact:true,
        component:About,
        title:'关于我们'
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
}

const Root = () => {
    const {lang} = useSelector<IReducer,IProps>(({lang}):IProps=>{
        return {
            lang:lang.lang
        }
    })
    return (
        <ConfigProvider locale={langs[lang] || zhCN}>
            <BrowserRouter>
                <Layout>
                    <Header></Header>
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
                                        render={(props)=>{
                                            document.title = route.title
                                            return <route.component {...props}></route.component>
                                        }}
                                    />
                                )
                            })
                        }
                        
                        {/* <Route path="/about" exact component={About}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="*" component={Error}></Route> */}
                    </Switch>
                    </Layout.Content>
                </Layout>
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default Root