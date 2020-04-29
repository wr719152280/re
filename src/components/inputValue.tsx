import React,{useState, Dispatch} from 'react'
import {Space, Input, Button} from 'antd'
import { useDispatch } from 'react-redux';
import {add, ADDAction} from '../store/action'

const addValue = (dispatch:Dispatch<ADDAction>,setValue:React.Dispatch<React.SetStateAction<string>>,xx:string) => {
    dispatch(add(xx))
    setValue('')
}

const InputValue = () => {
    const [value,setValue] = useState<string>('')
    const dispatch = useDispatch();
    return (
        <Space>
            <Input value={value} onChange={(event) => setValue(event.target.value)}></Input>
            <Button onClick={() => addValue(dispatch,setValue,value)}>添加数据</Button>
        </Space>
    )
}

export default InputValue