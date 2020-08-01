import AuthActions  from '../../actions/authactions/AuthActions'

function loginStart(payload){
    
    return {
        type: AuthActions.LOGIN_START,
        payload
    }
}

function loginSuccess(payload){

    return {
        type: AuthActions.LOGIN_SUCCESS,
        payload
    }
}

export default {loginStart, loginSuccess}