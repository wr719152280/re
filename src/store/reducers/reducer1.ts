import { ADDAction, REMOVEAction } from "../action";
import { ADD, REMOVE } from "../const";
import { DefaultRootState } from "react-redux";


export interface IInitState extends DefaultRootState{
    data:string[]
    count:number
}

const instState:IInitState = {
    data:[
        'sasa'
    ],
    count:0,
}

export default (state:IInitState = instState,action:ADDAction|REMOVEAction) => {
    const {data} = JSON.parse(JSON.stringify(state)) as IInitState
    switch (action.type) {
        case ADD:
            data.push(action.value)
            return {
                ...state,
                data
            }
        case REMOVE:
            data.splice(action.index,1)
            return {
                ...state,
                data
            }
        default:
            return state
    }
}