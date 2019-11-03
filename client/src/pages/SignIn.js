import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormControl , InputLabel, Input, FormHelperText} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { signInOnChangeEmailPhone } from '../actions';
import {
  Container,
  OutlinedInput,
  InputAdornment,
  Button
} from '@material-ui/core';
import { connect } from 'react-redux';
const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      maxWidth: 'md'
    }
});
const SignIn = ({
  classes, email, password, handleChangeEmail
}) => (
<React.Fragment>
<div className={classes.root}>
<h1>SignIn</h1>
<ValidatorForm
                // ref="form"
                // onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Email"
                    onChange={(e) => handleChangeEmail(e.target.value)}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
</div>
</React.Fragment>
);
let mapStateToProps = (state) => {
  return {email: state.signInReducer.email, password: state.signInReducer.password}
};
let mapDispatchToProps = (dispatch) => {
  return {handleChangeEmail: (newEmail) => dispatch(signInOnChangeEmailPhone(newEmail))}
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));
