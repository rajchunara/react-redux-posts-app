import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import { decrementIcecream,incrementIcecream} from '../redux/icecream/icecreamAction';


 class IcecreamComponent extends PureComponent {
    render() {
        console.log(this.props)
        
        const {numOfIcecream} = this.props.icecreamState;
        const {incrementIcecream, decrementIcecream} = this.props;

        return (
            <div>
                <div>Number of Icecrea:{numOfIcecream} </div>
                <button onClick = {()=> incrementIcecream()}>+</button>
                <button onClick = {() => decrementIcecream()}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    icecreamState:state.icecreamState
})

const mapDispatchToProps = (dispatch) => ({
    incrementIcecream:()=>{dispatch(incrementIcecream())},
    decrementIcecream:()=>{dispatch(decrementIcecream())}
})

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamComponent);
