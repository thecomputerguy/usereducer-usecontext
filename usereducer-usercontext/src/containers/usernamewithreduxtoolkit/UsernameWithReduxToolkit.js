import React, {useReducer} from 'react'
import AuthStateReducerWithReduxToolkit, {authState, loginStart, loginFail, loginSuccess} from '../../reducers/authreducerwithreduxtoolkit/AuthReducerWithReduxToolkit'

const UsernameWithReduxToolkit = () => {
    const [state, dispatch] = useReducer(AuthStateReducerWithReduxToolkit, authState)    
    
    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
        const formData = new FormData(event.target)
        const username = formData.get("username")
        dispatch(loginSuccess({username}))
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="enter the username" 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        <div>UsernameWithReduxToolkit : {state.username}</div>
        </>
    )
}

export default UsernameWithReduxToolkit
