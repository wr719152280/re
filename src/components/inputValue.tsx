import React, { Component } from 'react'
import { Space, Input, Button } from 'antd'
import { Dispatch } from 'redux'
import { connect, } from 'react-redux'
import { IInitState } from '../store/reducers/reducer'
import {add} from '../store/action'

interface IProps {
    // data: string[]
    onAdd:(value:string) => void
}

interface IState {
    value: string
}
class InputValue extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        console.log(props)
        this.state = {
            value: ""
        }
    }
    public render() {
        return (
            <Space>
                <Input onChange={this.changeValue} value={this.state.value} />
                <Button onClick={this.addData}>添加数据</Button>
            </Space>
        )
    }

    private changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value
        })
    }

    private addData = () => {
        this.props.onAdd(this.state.value)
        this.setState({
            value: ""
        })
    }
}


// 将 reducer 中的状态插入到组件的 props 中
// const mapStateToProps = (state: IInitState): { data: string[] } => ({
//     data:state.data
// })

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAdd: (value:string) => dispatch(add(value)),

})

export default connect(null, mapDispatchToProps)(InputValue)
