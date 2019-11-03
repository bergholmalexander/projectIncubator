export const signUpOnChangeEmail = (email) => {
    return {
        type: "SIGNUP_ONCHANGE_EMAIL",
        payload: email
    }
}

export const signUpOnChangePassword = (password) => {
    return {
        type: "SIGNUP_ONCHANGE_PASSWORD",
        payload: password
    }
}