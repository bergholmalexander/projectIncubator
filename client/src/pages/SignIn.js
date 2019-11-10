import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { signInOnChangeEmailPhone, signInOnChangePassword } from '../actions';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '11rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formComponent: {
    marginBottom: '0.6em',
  }
});

const SignIn = ({
  classes,
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit
}) => (
  <React.Fragment>
    <div className={classes.root}>
      <h1>SignIn</h1>
      <ValidatorForm
        onSubmit={() => handleSubmit(email, password)}
        className={classes.form}
      >
        <div className={classes.formComponent}>
          <TextValidator
            label="Email"
            onChange={e => handleChangeEmail(e.target.value)}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
            variant="outlined"
          />
        </div>
        <div className={classes.formComponent}>
          <TextValidator
            label="Password"
            onChange={e => handleChangePassword(e.target.value)}
            name="password"
            type="password"
            validators={['required']}
            errorMessages={['this field is required']}
            value={password}
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </ValidatorForm>
    </div>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    email: state.signInReducer.email,
    password: state.signInReducer.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeEmail: newEmailPhone => {
      dispatch(signInOnChangeEmailPhone(newEmailPhone));
    },
    handleChangePassword: newPassword => {
      dispatch(signInOnChangePassword(newPassword));
    },
    handleSubmit: () => {}
  };
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
