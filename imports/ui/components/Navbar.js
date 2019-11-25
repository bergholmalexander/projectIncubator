import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Logo from '../components/Logo';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    backgroundColor: theme.palette.primary.main,
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
      marginLeft: '0.5em',
      color: theme.palette.white,
      borderColor: theme.palette.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
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
      <div className={classes.buttonsContainer}>
        <Link to="/signup">
          <Button variant="text">
            Sign up
          </Button>
        </Link>
        <Link to="/signin">
          <Button variant="outlined">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
