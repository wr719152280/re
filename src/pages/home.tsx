import React, { useEffect, useState } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import usersApi from '../apis/users'

const Home = (props: RouteChildrenProps) => {
    const [users, setUsers] = useState<any[]>([])
    useEffect(() => {
        usersApi.getUses().then(res => {
            if (res.data) {
                setUsers(res.data)
            }
        })
    }, [])
    return (
        <Row gutter={[16, 16]} style={{ margin: 0 }}>
            {
                users.map(user => {
                    return (
                        <Col key={user.id} span={4}>
                            <Card
                                hoverable
                                cover={<img src={user.avatar_url} alt="" />}
                            >
                                <Card.Meta title={user.login} description={user.html_url} />
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default Home