const initialState = {
    numOfCandy:100
}

export const candyReducer = (state = initialState , action) => {
    switch(action.type){
        
        case 'INCREMENT_CANDY': return {
            ...state,
            numOfCandy:state.numOfCandy + 1
        }
        case 'DECREMENT_CANDY': return {
            ...state,
            numOfCandy:state.numOfCandy - 1
        }
        default: return state

    }
}

//export candyReducer;