import React, {useReducer} from 'react'
import AuthReducer, {AuthState} from '../../reducers/authreducer/AuthReducer'
import ActionCreator from '../../actioncreators/authactioncreators/AuthActionCreator'

const UsernameComponent = () => {
    
    const [state, dispatch] = useReducer(AuthReducer, AuthState)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get("username")
        console.log(username)
        dispatch(ActionCreator.loginStart({username}))
    }

    // const handleChange = (event) => {
    //     console.log(event.target.value)
    //     dispatch(ActionCreator.loginSuccess({username: event.target.value}))
    // }

    return (<> 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="username" name="username" />
                <button type="submit">submit</button>
            </form>
    <p>username : {state.username}</p>
        </div>
    </>)

}

export default UsernameComponent