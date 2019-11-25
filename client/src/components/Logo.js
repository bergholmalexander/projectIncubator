import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    '& > a': {
      color: theme.palette.white,
      textDecoration: 'none',
      transition: 'all 150ms linear 0s',
      '& > p': {
        lineHeight: '50px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5em'
        }
      }
    }
  },
  primary: {
    '& > a': {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.light
      }
    }
  }
});

function Logo({
  classes,
  color
}) {
  return (
    <div className={`${classes.root} ${classes[color]}`}>
      <Link to="/">
        <Typography variant="h4" component="p">
          ProjectIncubator
        </Typography>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Logo);
