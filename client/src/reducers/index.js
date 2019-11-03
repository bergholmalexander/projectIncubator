import { combineReducers } from 'redux';

const signUpReducer = (state = {email:'',password:''}, action) => {
    switch(action.type) {
        case 'SIGNUP_ONCHANGE_EMAIL':
            return {...state, email: action.payload}
        case 'SIGNUP_ONCHANGE_PASSWORD':
            return {...state, password: action.payload}
        default:
            return {...state}
    }
}

export default combineReducers({signUpReducer});