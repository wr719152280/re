import { ADD,ADD_TYPE,REMOVE,REMOVE_TYPE, CHANGE_ROUTE_TYPE, CHANGE_ROUTE, CHANGE_LANG, CHANGE_LANG_TYPE, CHANGE_LOADING, CHANGE_LOADING_TYPE } from "./const";
import { LANG } from "./reducers/lang";

export interface ADDAction{
    type:ADD_TYPE
    value:string
}

export interface REMOVEAction{
    type:REMOVE_TYPE,
    index:number
}

export interface CHANGEROUTEAction{
    type:CHANGE_ROUTE_TYPE,
    name:string
}

export interface CHANGELANGAction{
    type:CHANGE_LANG_TYPE,
    lang:LANG
}

export interface CHANGELOADINGAction{
    type:CHANGE_LOADING_TYPE,
    loading:boolean
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

export const changeRoute = (name:string):CHANGEROUTEAction => {
    return {
        type:CHANGE_ROUTE,
        name
    }
}

export const changeLang = (lang:LANG):CHANGELANGAction => {
    return {
        type:CHANGE_LANG,
        lang
    }
}

export const changeLoading = (loading:boolean):CHANGELOADINGAction => {
    return {
        type:CHANGE_LOADING,
        loading
    }
}