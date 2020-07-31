import React, {useContext} from 'react'
import {Context} from '../../store/basicstore/BasicStore'
function UsernameDisplayer() {
    
    const [state, dispatch] = useContext(Context)

    return (
        <div>
            {state.username}     
        </div>)
}

export default UsernameDisplayer
