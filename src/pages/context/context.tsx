import React,{createContext, useReducer} from 'react'
import Ccc from './ccc'
import { reducer, defaultState, IDefaultState, IAction } from './reduer'

export interface IContext{
    state:IDefaultState
    dispatch?:React.Dispatch<IAction>
}

export const Context = createContext<IContext>({state:defaultState})

const ContextTest = () => {
    const [state,dispatch] = useReducer(reducer,defaultState)
    return(
        <Context.Provider value={{state,dispatch}}>
            <Ccc></Ccc>
        </Context.Provider>
    )
}

export default ContextTest