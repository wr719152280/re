import React,{Component} from 'react'
import { connect } from 'react-redux'
import { IInitState } from '../store/reducers/reducer'
import { Dispatch } from 'redux'
import { remove } from '../store/action'

interface IProps {
    data: string[]
    onRemove:(index:number) => void
}

class Lists extends Component<IProps>{
    public render(){
        return (
            this.props.data.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>this.props.onRemove(index)}>{item}</div>
                )
            })
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: IInitState): { data: string[] } => ({
    data:state.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRemove: (index:number) => dispatch(remove(index)),

})

export default connect(mapStateToProps,mapDispatchToProps)(Lists)