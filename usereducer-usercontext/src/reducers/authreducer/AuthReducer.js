import AuthActions from '../../actions/authactions/AuthActions'

const AuthState = {
    isRequestingToken: "",
    username: "",
    token: "",
    error: ""
}

const AuthReducer = (state, action) => {
    switch(action.type){
        case AuthActions.LOGIN_START:
            return {
                ...state,
                isRequestingToken: "yes",
                username: action.payload.username
            }
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                isRequestingToken: "no",
                username: action.payload.username,
                token: action.payload.token
            }
        default: return state || {}
    }
}

export {AuthState}
export default AuthReducer