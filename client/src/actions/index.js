export const signInOnChangeEmailPhone = (email) => {
  return {
    type: 'SIGNIN_ONCHANGE_EMAILPHONE',
    payload: email
  };
};
export const signInOnChangePassword = (password) => {
  return {
    type: 'SIGNIN_ONCHANGE_PASSWORD',
    payload: password
  };
};
