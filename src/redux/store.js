import {createStore, compose,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composerEnhancer(applyMiddleware(thunk))
    );

export default store;