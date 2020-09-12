import React , { Component} from 'react'
import { connect } from "react-redux";

class Notification extends Component {

    

    render(){
        return(
            <>
            <div>Notification</div>
            <p>{this.props.data}</p>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      data:state.bag

        
    }
}

const mapDispatchProps = (dispatch) =>{
    return{
        increase: () => dispatch({ type: "INC_ITEM" }),



    }


}
export default connect(mapStateToProps, mapDispatchProps)(Notification)
