import React, { Component } from 'react'
import {connect} from 'react-redux';
import { incrementCandy, decrementCandy } from '../redux/candy/candyAction';


 class CandyComponent extends Component {


    render() {
        const {candyState, incrementCandy,decrementCandy} = this.props
        return (
            <div>
                <div>Candies: {candyState.numOfCandy}</div>
                <button onClick={incrementCandy}>+</button>
                <button onClick={decrementCandy}>-</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    candyState:state.candyState
})

const mapDispatchToProps = (dispatch) =>{
    return {
        incrementCandy:()=>dispatch(incrementCandy()),
        decrementCandy:()=>dispatch(decrementCandy())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CandyComponent);