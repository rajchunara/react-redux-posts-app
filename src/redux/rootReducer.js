import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';
import {candyReducer as candyState}  from './candy/candyReducer'
import {postReducer as postState} from './posts/postReducer'

const cakeState = cakeReducer;
const icecreamState = icecreamReducer

const rootReducer = combineReducers({
    cakeState, 
    icecreamState, 
    candyState,
    postState
});

export default rootReducer;