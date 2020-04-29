import { DefaultRootState } from "react-redux";
import {CHANGELANGAction} from '../action'
import { CHANGE_LANG } from "../const";

export enum LANG{
    CH='ch',
    EN='en'
}

export interface IInitState extends DefaultRootState{
    lang:LANG
}

const initState = {
    lang:LANG.CH
}


export default (state:IInitState = initState,action:CHANGELANGAction) => {
    switch (action.type) {
        case CHANGE_LANG:
            const newState = JSON.parse(JSON.stringify(state))
            newState.lang = action.lang
            return newState
        default:
            return state
    }
}