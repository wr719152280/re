import reducer1, { IInitState } from './reducer1'
import lang, { IInitState as langIInitState} from './lang'
import loading,{IInitState as loadingIInitState} from './loadding'
import { combineReducers } from 'redux'

export interface IReducer{
    reducer1:IInitState,
    lang:langIInitState
    loading:loadingIInitState
}

export default combineReducers({reducer1,lang,loading})