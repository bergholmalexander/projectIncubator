export const signInOnChangeEmailPhone = emailphone => {
  return {
    type: 'SIGNIN_ONCHANGE_EMAILPHONE',
    payload: emailphone
  };
};

export const signInOnChangePassword = password => {
  return {
    type: 'SIGNIN_ONCHANGE_PASSWORD',
    payload: password
  };
};
