import { RouteComponentProps, RouteChildrenProps } from "react-router-dom";

namespace routerTypes{
    export interface IRouter{
        path:string
        exact?:boolean
        component:React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
        title:string
        showNav?:boolean
        children?:IRouter[]
        icon?:React.ReactNode
    }

    export interface IRouterProps extends RouteChildrenProps{
        childrenRouters?:IRouter[]
    }
}

export default routerTypes