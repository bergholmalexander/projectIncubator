import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Button, Divider, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Logo from '../components/Logo';
import {
  signUpOnChangeEmail,
  signUpOnChangePassword
} from '../actions';

const styles = theme => ({
  root: {
    height: '100%',
    boxSizing: 'border-box',
    '& button': {
      fontSize: '1em'
    },
    [theme.breakpoints.up('md')]: {
      padding: '4em 0',
      backgroundColor: theme.palette.primary.main
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.white,
    '& > p': {
      margin: '0.5em 0 1em'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2em 1.5em 10em'
    },
    [theme.breakpoints.up('md')]: {
      width: '36em',
      padding: '5em 7em 10em',
      border: `1px solid ${theme.palette.grey.light}`,
      borderRadius: '5px'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& button': {
      height: '3em',
      marginTop: '1em'
    }
  },
  formInput: {
    marginBottom: '0.6em'
  },
  linkContainer: {
    display: 'flex',
    marginTop: '2em',
    '& > a': {
      color: theme.palette.blue.light,
      lineHeight: '24px',
      textDecoration: 'none',
      transition: 'all 150ms linear 0s',
      '&:hover': {
        color: theme.palette.blue.dark
      }
    }
  },
  divider: {
    margin: '1em 0 2em',
    width: '100%'
  },
  loginServiceContainer: {
    width: '100%',
    '& > button': {
      width: '100%',
      backgroundColor: theme.palette.facebook.main,
      color: theme.palette.white,
      '&:hover': {
        backgroundColor: theme.palette.facebook.light
      }
    }
  }
});

function SignUp({
  classes,
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit
}) {
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Logo color="primary" />
        <Typography>Incubate your projects now!</Typography>
        <ValidatorForm
          className={classes.form}
          onSubmit={() => handleSubmit(email, password)}
        >
          <TextValidator
            className={classes.formInput}
            label="Email"
            variant="outlined"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={[
              'Please enter an email address.',
              'Please enter a valid email address.'
            ]}
            onChange={e => handleChangeEmail(e.target.value)}
          />
          <TextValidator
            className={classes.formInput}
            label="Password"
            variant="outlined"
            type="password"
            validators={['required']}
            errorMessages={['Please enter a password.']}
            value={password}
            onChange={e => handleChangePassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </ValidatorForm>
        <div className={classes.linkContainer}>
          <Typography>
            Already on ProjectIncubator?&nbsp;
          </Typography>
          <Link to="/signin">
            Log in
          </Link>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.loginServiceContainer}>
          <Button variant="contained">
            <FacebookIcon />&nbsp;Log in with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    email: state.signUpReducer.email,
    password: state.signUpReducer.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeEmail: email => {
      dispatch(signUpOnChangeEmail(email));
    },
    handleChangePassword: password => {
      dispatch(signUpOnChangePassword(password));
    },
    handleSubmit: () => {}
  };
};

SignUp.propTypes = {
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
)(withStyles(styles)(SignUp));
