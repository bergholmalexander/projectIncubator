import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Logo from '../components/Logo';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    backgroundColor: theme.palette.white,
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    boxSizing: 'border-box',
    zIndex: '9',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 3rem'
    }
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      marginLeft: '0.5em'
    },
    '& > a': {
      textDecoration: 'none'
    }
  }
});

function Navbar({
  classes
}) {
  return (
    <div className={classes.root}>
      <Logo />
      {Meteor.userId() && (
        <div className={classes.buttonsContainer}>
          <Link to="/">
            <Button variant="text">
              Sign out
            </Button>
          </Link>
        </div>
      )}
      {!Meteor.userId() && (
        <div className={classes.buttonsContainer}>
          <Link to="/signup">
            <Button variant="text">
              Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button variant="outlined" color="primary">
              Log in
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(Navbar);
