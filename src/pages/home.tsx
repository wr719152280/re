import React, { useState } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { Card, Row, Col } from 'antd'

const Home = (props: RouteChildrenProps) => {
    const [users] = useState<any[]>([])
    
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