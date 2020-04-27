import React, { Component } from 'react'
import {Space,Input,Button} from 'antd'
import { connect } from 'react-redux'



interface IProps{
    a?:any
}

interface IState{
    value:string
}
// @connect()
class InputValue extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state = {
            value:""
        }
    }
    public render(){
        return (
            <Space>
                <Input onChange={this.changeValue} value={this.state.value} />
                <Button onClick={this.addData}>添加数据</Button>
            </Space>
        )
    }

    private changeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value:event.target.value
        })
    }

    private addData = () => {
        console.log(this.state.value)
    }
}

export default InputValue
