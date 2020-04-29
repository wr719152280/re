import { DefaultRootState } from "react-redux"
import { CHANGELOADINGAction } from "../action"
import { CHANGE_LOADING } from "../const";


export interface IInitState extends DefaultRootState{
    loading:boolean
}

const initState = {
    loading:true
}


export default (state:IInitState = initState,action:CHANGELOADINGAction) => {
    switch (action.type) {
        case CHANGE_LOADING:
            const newState = JSON.parse(JSON.stringify(state))
            newState.loading = action.loading
            return newState
        default:
            return state
    }
}