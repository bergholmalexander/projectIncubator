import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Navbar from '../components/Navbar';

const styles = theme => ({
  'section-1': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    },
    [theme.breakpoints.up('md')]: {
      padding: '2em 10%'
    },
    '& > div:nth-of-type(1)': {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '50px',
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        width: '55%'
      },
      '& > img': {
        width: '100%',
        [theme.breakpoints.up('md')]: {
          borderRadius: '50%'
        }
      }
    },
    '& > div:nth-of-type(2)': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0 5em',
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '50px',
        width: '100%',
        boxSizing: 'border-box',
        padding: '1em',
        backgroundColor: theme.palette.white
      },
      [theme.breakpoints.up('md')]: {
        width: '40%'
      },
      '& > p': {
        margin: '0 0 1em',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.8em'
        },
        [theme.breakpoints.up('md')]: {
          fontWeight: '600'
        }
      },
      '& > button': {
        height: '3em',
        [theme.breakpoints.down('sm')]: {
          margin: '1em 0 0'
        },
        [theme.breakpoints.up('md')]: {
          margin: '10% 25% 0 15%',
          fontSize: '1.1em'
        }
      }
    }
  },
  searchIcon: {
    color: theme.palette.grey.dark
  }
});

function Landing({
  classes
}) {
  return (
    <>
      <Navbar />
      <div>
        <section className={classes['section-1']}>
          <div>
            <img src="/map.jpg" alt="map" />
          </div>
          <div>
            <Typography variant="h4" component="p">
              We provide the platform.
              <br />
              You provide the solution.
            </Typography>
            <OutlinedInput
              placeholder="Find a project and more"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className={classes.searchIcon} />
                </InputAdornment>
              }
            />
            <Button
              color="primary"
              variant="outlined"
            >
              Or create your own!
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
