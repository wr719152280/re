import { ADDAction, REMOVEAction } from "../action";
import { ADD, REMOVE } from "../const";

export interface IInitState{
    data:string[]
    count:number
}

export default (state:IInitState = {data:['sasasa','dasdasd'],count:0},action:ADDAction|REMOVEAction) => {
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