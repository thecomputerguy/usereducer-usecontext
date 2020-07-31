import React, {createContext, useReducer} from 'react'
import BasicReducer from '../../reducers/basicreducer/BasicReducer'

const initialState = {
    username: 'initial name',
    password: ''
}

const Store = ({children}) => {

    const [state, dispatch] = useReducer(BasicReducer, initialState)
    
    return (<Context.Provider value={[state, dispatch]}> 
        {children}
    </Context.Provider>);
}

export const Context = createContext(initialState)
export default Store 