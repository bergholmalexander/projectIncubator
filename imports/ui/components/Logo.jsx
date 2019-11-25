import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    '& > a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      transition: 'all 150ms linear 0s',
      '&:hover': {
        color: theme.palette.primary.light
      },
      '& > p': {
        lineHeight: '50px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.5em'
        }
      }
    }
  }
});

function Logo({
  classes
}) {
  return (
    <div className={classes.root}>
      <Link to="/">
        <Typography variant="h4" component="p">
          ProjectIncubator
        </Typography>
      </Link>
    </div>
  );
}

export default withStyles(styles)(Logo);
