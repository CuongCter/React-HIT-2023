const INCREMENT = "increment"

//create Decrement type

const initialState = {
    count: 0,
}

export const increment = () => ({
    type: INCREMENT // day duoc hieu la action
})

//write new function name decrement

function counterReducer(state = initialState,action){
    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        // add new case for decrement
        default :
            return state;
    }
   
}   

export default counterReducer