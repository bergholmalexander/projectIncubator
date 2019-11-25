import { combineReducers } from 'redux';

const signInReducer = (
  state = {
    email: '',
    password: ''
  },
  action
) => {
  switch (action.type) {
    case 'SIGNIN_ONCHANGE_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'SIGNIN_ONCHANGE_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    default:
      return { ...state };
  }
};

const signUpReducer = (
  state = {
    email: '',
    password: ''
  },
  action
) => {
  switch(action.type) {
    case 'SIGNUP_ONCHANGE_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'SIGNUP_ONCHANGE_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    default:
      return { ...state };
  }
};

const appReducer = combineReducers({
  signInReducer,
  signUpReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
