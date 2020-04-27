import { ADDAction, REMOVEAction } from "../action";
import { ADD, REMOVE } from "../const";

export interface IState{
    data:string[]
}

export default (state:IState = {data:[]},action:ADDAction|REMOVEAction) => {
    switch (action.type) {
        case ADD:
            const {data} = state
            data.push(action.value)
            return {
                ...state,
                data
            }
        case REMOVE:
            return {
                ...state
            }
        default:
            return state
    }
}