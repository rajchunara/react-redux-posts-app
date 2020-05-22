
const initialState = {
    cakeType:'Black forest',
    numOfCakes:10
}

const cakeReducer = (state = initialState, action)=>{

    switch(action.type){

        case 'INCREMENT_CAKE': {

            return {
                ...state,
                numOfCakes:state.numOfCakes + 1
            }
        }
        case 'DECREMENT_CAKE': {
            return {
                ...state,
                numOfCakes:state.numOfCakes - 1
            }
        }
        default: return state;
    }
}

export default cakeReducer;