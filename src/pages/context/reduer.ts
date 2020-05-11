export interface IDefaultState{
    value:number
}

export const ADD_NUM = 'ADD_NUM'

export const REDUCE_NUM = 'REDUCE_NUM'

export type ADD_NUM_TYPE = typeof ADD_NUM

export type REDUCE_NUM_TYPE = typeof REDUCE_NUM

export interface IAction{
    type: ADD_NUM_TYPE | REDUCE_NUM_TYPE
}

export const defaultState:IDefaultState = {
    value:0
}

export const reducer = (state:IDefaultState,action:IAction)=>{
    switch (action.type) {
        case ADD_NUM:
            return { ...state, value: state.value + 1 };
        case REDUCE_NUM:
            return { ...state, value: state.value - 1 };
        default:
            return state
    }
}