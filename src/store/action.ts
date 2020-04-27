import { ADD,ADD_TYPE,REMOVE,REMOVE_TYPE } from "./const";

export interface ADDAction{
    type:ADD_TYPE
    value:string
}

export interface REMOVEAction{
    type:REMOVE_TYPE,
    index:number
}

export const add = (value:string):ADDAction => {
    return {
        type:ADD,
        value
    }
}

export const remove = (index:number):REMOVEAction => {
    return {
        type:REMOVE,
        index
    }
}