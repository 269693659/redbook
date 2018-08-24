import React,{Component} from 'react'
import {connect} from 'react-redux'
import UI from './IndexUI'
class Index extends Component{
    render(){
        return(
            <UI/>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        
    }
}
const mapdispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Index)