import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import { signUpOnChangeEmail, signUpOnChangePassword } from '../actions';
import {
  Container,
  Button
} from '@material-ui/core';

const styles = theme => ({
  root: {
    'background-color': theme.palette.primary.main,
    color: theme.palette.white,
    height: '100vh',
    boxSizing: 'border-box',
    paddingTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > section:nth-of-type(1)': {
      'text-align': 'center',
      'font-weight': 'bold',
      fontSize: '1.8em',
      padding: '1em',
    },
    '& form': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  searchIcon: {
    color: theme.palette.darkgrey
  }
});

const SignUp = ({
  classes, email, password, handleChangeEmail, handleChangePassword
}) => (
  <React.Fragment>
    <div className={classes.root}>
      <section>
            projectIncubator
        <br />
            incubate your projects now!
      </section>
      <section>
        <Container maxWidth="md">
          <ValidatorForm
            //onSubmit={this.handleSubmit}
          >
            <TextValidator
              label="Email"
              onChange={e => handleChangeEmail(e.target.value)}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              variant="outlined"
            />
            <br/>
            <TextValidator
              label="Password"
              onChange={p => handleChangePassword(p.target.value)}
              name="password"
              type="password"
              validators={['required']}
              errorMessages={['this field is required']}
              value={password}
              variant= 'outlined'
              style = {{ color: 'white' }}
            />
            <br/>
            <Button type="Sign up">Submit</Button>
          </ValidatorForm>
        </Container>
      </section>
    </div>
  </React.Fragment>
);

let mapStateToProps = state => {
  return { email: state.signUpReducer.email, password: state.signUpReducer.password };
};

let mapDispatchToProps = dispatch => {
  return { handleChangeEmail: e => dispatch(signUpOnChangeEmail(e)),
    handleChangePassword: p => dispatch(signUpOnChangePassword(p)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SignUp));

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  handleChangeEmail: PropTypes.object.isRequired,
  handleChangePassword: PropTypes.object.isRequired
};
