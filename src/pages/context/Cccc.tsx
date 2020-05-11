import React,{useContext} from 'react'
import { Context } from './context'

const Cccc = () => {
    const {state} = useContext(Context)
    return (
        <div className="cccc">
            {state.value}
        </div>
    )
}

export default Cccc