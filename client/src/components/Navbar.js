import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '50px',
    backgroundColor: theme.palette.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderBottom: `1px solid ${theme.palette.lightgrey}`,
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1em'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 3em'
    },
    '& > div:last-of-type': {
      '& > button:not(:last-of-type)': {
        marginRight: '0.5em'
      }
    }
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'all 150ms linear 0s',
    '&:hover': {
      color: theme.palette.primary.light
    },
    '& > h1': {
      margin: '0 0 3px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2em'
      }
    }
  }
});

const Navbar = ({
  classes
}) => {
  return (
    <div className={classes.root}>
      <Link
        className={classes.link}
        to="/"
      >
        <h1>projectIncubator</h1>
      </Link>
      <div>
        <Link 
          className={classes.link}
          to="/SignUp"
        >
          <Button
            variant="text"
          >
            Join now
          </Button>
        </Link>
        <Button
          color="primary"
          variant="outlined"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
