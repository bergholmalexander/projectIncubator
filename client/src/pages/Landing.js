import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  OutlinedInput,
  InputAdornment,
  Button
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Navbar from '../components/Navbar';

const styles = theme => ({
  root: {
    '& > section:nth-of-type(1)': {
      height: '100vh',
      boxSizing: 'border-box',
      paddingTop: '50px',
      '& > div': {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse'
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
          marginBottom: '5em',
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
          '& > h1': {
            fontSize: '1.8em'
          },
          '& > button': {
            [theme.breakpoints.down('sm')]: {
              margin: '1em 0 0'
            },
            [theme.breakpoints.up('md')]: {
              margin: '1em 6em 0'
            }
          }
        }
      }
    }
  },
  searchIcon: {
    color: theme.palette.darkgrey
  }
});

const Landing = ({
  classes
}) => (
  <React.Fragment>
    <Navbar />
    <div className={classes.root}>
      <section>
        <Container maxWidth="md">
          <div>
            <img src="/landing_map.png" alt="map" />
          </div>
          <div>
            <h1>
              We provide the platform.
              <br />
              You provide the solution.
            </h1>
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
        </Container>
      </section>
    </div>
  </React.Fragment>
);

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
