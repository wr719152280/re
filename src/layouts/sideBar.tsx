import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import routerTypes from '../types/routerTypes'

interface IHeaderProps {
    routerList: routerTypes.IRouter[]
}

const SideBar = (props: IHeaderProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const history = useHistory()
    let keys = props.routerList.filter(item => {
        return history.location.pathname.includes(item.path)
    }).map(item => {
        return {
            path: item.path
        }
    })
    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
            <Menu
                mode="inline"
                selectedKeys={[keys[keys.length - 1].path]}
                style={{ height: '100%' }}
            >
                {
                    props.routerList.filter(item => item.showNav).map(item => {
                        return (
                            <Menu.Item key={item.path} icon={item.icon} onClick={() => history.push(item.path)}>{item.title}</Menu.Item>
                        )
                    })
                }
            </Menu>
        </Layout.Sider>
    )
}

export default SideBar