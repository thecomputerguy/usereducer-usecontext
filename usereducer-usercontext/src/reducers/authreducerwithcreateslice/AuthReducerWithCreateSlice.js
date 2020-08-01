import {createSlice} from '@reduxjs/toolkit'


const authStateWithCreateSlice = {
    isTokenRequested: "",
    username: "",
    token: "",
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    reducers: {
        loginStart: (state, action) => {
            state.isRequestingToken = 'yes'
            state.username = action.payload.username
        },
        loginSuccess: (state, action) => {
            state.isRequestingToken = "no"
            state.token = action.payload.token
            state.username = action.payload.username
        },
        loginFail: (state, action) => {
            state.isRequestingToken = "no"
            state.username = action.payload.username
            state.token = ""
        }
    },
    initialState: authStateWithCreateSlice
})

const {loginStart, loginSuccess, loginFail} = authSlice.actions
const authReducer = authSlice.reducer

export {loginStart, loginSuccess, loginFail, authReducer, authStateWithCreateSlice}
