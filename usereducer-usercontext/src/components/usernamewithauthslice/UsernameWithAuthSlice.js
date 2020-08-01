import React, {useReducer} from 'react'
import {loginStart, loginSuccess, loginFail, authReducer, authStateWithCreateSlice} from '../../reducers/authreducerwithcreateslice/AuthReducerWithCreateSlice'

const UsernameWithAuthSlice = () => {
    
    const [state, dispatch] = useReducer(authReducer, authStateWithCreateSlice)

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get("username")
        dispatch(loginStart({
            username
        }))
        // use fetch here to pull data from the api and dump it in the store using dispatch
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="username" id="username" />
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
        <div>UsernameWithAuthSlice: {state.username}</div>
        </>
    )
}

export default UsernameWithAuthSlice
