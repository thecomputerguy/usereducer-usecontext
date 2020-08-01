import {createReducer, createAction} from '@reduxjs/toolkit'

/*Actions */
const loginSuccess = createAction("LOGIN_SUCCESS")
const loginStart = createAction("LOGIN_START")
const loginFail = createAction("LOGIN_FAIL")

/*initial state*/
const authState = {
    isRequestingToken: "",
    username: "",
    token: "",
    error: ""
}

/*Reducer*/
const AuthReducerWithReduxToolkit = createReducer(authState, {
    [loginStart]: (state, action) => {
        state.isRequestingToken = "yes"
        state.username = action.payload.username
    },
    [loginSuccess]: (state, action) => {
        state.isRequestingToken = "no"
        state.username = action.payload.username
        state.token = action.payload.token
    },
    [loginFail]: (state, action) => {
        state.isRequestingToken = "no"
        state.username = action.payload.username
    }
})

/*export initial state */
export {authState, loginStart, loginFail, loginSuccess}
/*export the reducer*/
export default AuthReducerWithReduxToolkit