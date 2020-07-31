import React, {useContext, useEffect} from 'react'
import {Context} from '../../store/basicstore/BasicStore'
function SetUsername({props}) {
    
    const [state, dispatch] = useContext(Context)
    const username = "Bob"

    useEffect(() => {
        if(username)
            dispatch({type: 'UPDATE_NAME', payload: username})
    })

    return (
        <>
        </>
    )
}

export default SetUsername