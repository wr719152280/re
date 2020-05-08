import configApis from "./apis/config"
import store from "./store"
import { changeConfig } from "./store/action"

class Config {
    public initConfig = () => {
        return new Promise((resolve)=>{
            configApis.getBaseInfo().then(res=>{
                if(res.data.data && res.data.success){
                    store.dispatch(changeConfig(res.data.data))
                    resolve()
                }
            })
        })
        
    }
}

export default new Config()