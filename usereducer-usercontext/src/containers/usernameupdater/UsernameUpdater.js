import React, {useContext, useEffect} from 'react'
import {Context} from '../../store/basicstore/BasicStore'

function UsernameUpdater() {
    const [state, dispatch] = useContext(Context)
    
    useEffect(() => {
        dispatch({type: "UPDATE_NAME_AND_PASSWORD", payload: {username:'sharma', password: 'testingapp'}})
    })
    return (
        <div>
            <p>{state.username} : {state.password}</p>
        </div>
    )
}

export default UsernameUpdater

