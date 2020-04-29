import axios from 'axios'
import store from '../store'
import { changeLoading } from '../store/action'
import { message } from 'antd'

const http = axios.create()

let requestLoadingCount:number = 0

const addLoading = () => {
    requestLoadingCount++
    if(requestLoadingCount > 0){
        store.dispatch(changeLoading(true))
    }
}

const removeLoading = () => {
    requestLoadingCount--
    if(requestLoadingCount === 0){
        store.dispatch(changeLoading(false))
    }
}

http.interceptors.request.use((config)=>{
    addLoading()
    return config
})

http.interceptors.response.use(res=>{
    removeLoading()
    if(res.status === 200){
        return Promise.resolve(res)
    }
    return Promise.reject(res);
},(error:Error)=>{
    removeLoading();
    message.error(error.stack)
    return Promise.reject(error);
})

export default http