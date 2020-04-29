import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { ValidateErrorEntity,Store } from 'rc-field-form/lib/interface'
import { RouteChildrenProps } from 'react-router-dom';
import usersApi from '../apis/users';

interface ILoginData{
    name:string
    password:string
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};
const Login = (props:RouteChildrenProps) => {
    const [loading,setLoading] = useState<boolean>(false)
    const onFinish = (values:Store) => {
        setLoading(true)
            usersApi.posts().then(res=>{
                props.history.push('/')
            }).catch(err=>{
                setLoading(false)
            })
    }
    const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
        console.log(errorInfo)
    }
    return (
        <div className="login-page">
            <div className="login-main">
                <Form
                    {...layout}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input disabled={loading} />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password  disabled={loading} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button loading={loading} type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login