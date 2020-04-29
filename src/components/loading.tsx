import React from 'react'
import { useSelector } from 'react-redux'
import { IInitState } from '../store/reducers/loadding'
import { IReducer } from '../store/reducers'

const Loading = () => {
    const {loading} = useSelector<IReducer,IInitState>((state)=>{
        return {
            loading:state.loading.loading
        }
    })
    if(loading){
        return (
            <div className="loading-component">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }else{
        return null
    }
    
}

export default Loading