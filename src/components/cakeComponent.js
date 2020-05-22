import React,{Component} from 'react'
import {connect} from 'react-redux';
import {increment, decrement} from '../redux/cake/cakeAction';


class CakeComponent extends Component {


    render() {
        console.log(this.props);
        const {numOfCakes} = this.props.cakeState 

        return (
            <div>
                <div>Cakes:{this.props.cakeType}</div> 
                <div>Number of Cakes:{numOfCakes}</div> 
                <button onClick = {this.props.incrementData}>+</button>
                <button onClick = {this.props.decrementData}>-</button>
            </div>
        )
    }
}

const mapStateToProps =(state,ownProps)=>({
    //Always get the state which is necessary, Here we are getting cakeState and not icecreamState
    //This will avoid unnecessary rerenders of other components
    //If we grab whole state here(including icecreamState), then we will get it in props of cakeComponent
    // and if we change icecreamState, it will change props of cakeComponent thus rerender cakeComponent
    //Which we do not want. So only get that piece of state which is required
    cakeState:state.cakeState
})

//This dispatch methods will be available for this component only
const mapDispatchToProps = dispatch => {
    return {
        incrementData:() => dispatch(increment()),
        decrementData:() => dispatch(decrement())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent);


