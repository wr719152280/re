import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/action'
import { List } from 'antd'
import { IReducer } from '../store/reducers'

interface IProps {
    data: string[]
}

const Lists = () => {
    const {data} = useSelector<IReducer,IProps>(({reducer1}):IProps=>{
        const {data} = reducer1
        return {
            data
        }
    })
    const dispatch = useDispatch()
    return (
        <div>
            <List 
                dataSource={data} 
                renderItem={(item,index)=>{
                    return <List.Item key={index} onClick={() => dispatch(remove(index))}>{item}</List.Item>
                }}
                bordered
            />
        </div>
    )
}

export default Lists