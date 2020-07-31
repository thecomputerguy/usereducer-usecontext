const BasicReducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_NAME': 
            return {
                ...state,
                username: action.payload
            }
        case 'UPDATE_NAME_AND_PASSWORD':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state 
    }
}

export default BasicReducer