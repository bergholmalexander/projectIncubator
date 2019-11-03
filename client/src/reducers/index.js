import { combineReducers } from 'redux';

const signInReducer = (state = {email:'', password:''}, action) => {
  switch(action.type) {
  case 'SIGNIN_ONCHANGE_EMAILPHONE':
    console.log(action.payload);
    return {...state, email: action.payload};
  case 'SIGNIN_ONCHANGE_PASSWORD':
    return {...state, password: action.payload};
  default:
    return {...state};
  }
};

export default combineReducers({signInReducer});
