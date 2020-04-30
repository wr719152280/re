import React, { useEffect, useState } from 'react'
import routerTypes from '../types/routerTypes'
import { Layout, Menu } from 'antd'
import { Link, Route } from 'react-router-dom'

const About = (props:routerTypes.IRouterProps) => {
    return (
        <Layout>
            {
                props.childrenRouters && props.childrenRouters.length > 0 &&
                <>
                <Layout.Sider> 
                    {
                        <Menu selectedKeys={[props.location.pathname]}>
                            {
                                props.childrenRouters.map(item=>{
                                    return (
                                        <Menu.Item key={item.path}>
                                            <Link to={item.path}>
                                                {item.title}
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    }
                </Layout.Sider>
                <Layout.Content>
                    {
                        props.childrenRouters.map((route)=>{
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
                </Layout.Content>
                </>
            }
            
            
        </Layout>
       
    )
}

export default About