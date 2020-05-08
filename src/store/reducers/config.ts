import { CHANGECONFIGAction } from "../action";
import { CHANGE_CONFIG } from "../const";


const initState = {
    config: {},
    currentUser: null,
    lang:{}
}

export default (state:any = initState,action:CHANGECONFIGAction) => {
    switch(action.type){
        case CHANGE_CONFIG:
            return action.config
        default:
            return state        
    }
}