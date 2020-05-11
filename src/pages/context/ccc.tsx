import React, { useContext } from 'react'
import Cccc from './Cccc'
import { Button } from 'antd'
import { Context } from './context'
import { ADD_NUM, REDUCE_NUM } from './reduer'

const Ccc = () => {
    const {dispatch} = useContext(Context)
    if(!dispatch){
        return null
    }
    return (
        <>
            <Cccc></Cccc>
            <Button onClick={() => dispatch({type: ADD_NUM})}>add</Button>
            <Button onClick={() => dispatch({type: REDUCE_NUM})}>REDUCE</Button>
        </>
    )
}

export default Ccc