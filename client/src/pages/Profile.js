import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Divider, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';

// mocks
const user = {
  _id: 'user_1',
  email: 'mingyu.gao96@gmail.com',
  firstName: 'Mingyu',
  lastName: 'Gao',
  location: 'Vancouver, BC',
  avatar: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p160x160/12190960_110629215966963_3614000811337664993_n.jpg?_nc_cat=108&_nc_oc=AQnYvOIh7TYnVJr8yEIdGLAbwpGAiUbSFK1iu6TPFh65W1_1rRyXBDH2A7XXV3UAR3M&_nc_ht=scontent-sea1-1.xx&oh=c000e43f77f95d2e29134fc88b4c75a6&oe=5E8C39F8'
};

const projects = [
  {
    _id: 'project_1',
    title: 'The Door Is Open',
    location: 'Vancouver, BC',
    details: [
      'Volunteer twice a month at the Dunlevy Ave food bank',
      'Design and prepare recreation programs'
    ],
    media: [
      'http://www.thedoorisopen.ca/wp-content/uploads/2019/07/DSC05512a-360x240.jpg'
    ]
  },
  {
    _id: 'project_2',
    title: 'Save the Planet',
    location: 'Amazon Rainforest',
    details: [
      'Plant five million billion trees in the backyard',
      'Prevent forest fires by raining',
      'Donate a thousand dollars to teamtrees.org'
    ],
    media: [
      'http://gnnhd.tv/news/2018/October/10-08-18/gnn_big_images/38499997_59393688.jpg'
    ]
  },
  {
    _id: 'project_3',
    title: 'South Africa Water Crisis Solution',
    location: 'Capetown, South Africa',
    details: [
      'Lead a team of 50 to fight against the Cape Town water crisis',
      'Melt ice taken from Antarctica and give the water to the people',
      'Performing various rain dances with the indigenous to ask the Gods for blessings',
      'Intead of flushing water down the toilet, recycle it as drinking water for restaurants'
    ],
    media: [
      'https://gcs.thesouthafrican.com/2019/03/f2479eb8-helicopter-1218974_1280-750x536.jpg'
    ]
  }
];

const styles = theme => ({
  root: {
    display: 'flex',
    padding: '2em 10%'
  },
  userInfo: {
    flexGrow: '1',
    height: 'fit-content',
    margin: '0 2em 0 0',
    padding: '1em',
    border: `1px solid ${theme.palette.grey.light}`,
    '& > img': {
      width: '100%',
    },
    '& > p:nth-of-type(2)': {
      color: theme.palette.grey.dark
    }
  },
  projects: {
    flexGrow: '3'
  },
  projectContainer: {
    margin: '1em 0 0'
  },
  project: {
    display: 'flex',
    margin: '0 0 1em',
    padding: '1em',
    border: '1px solid transparent',
    transition: 'all 150ms linear 0s',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.light}`,
      borderRadius: '5px',
      cursor: 'pointer'
    },
    '& > img': {
      width: '10em',
      height: '10em',
      margin: '0 1em 0 0',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    '& > div': {
      '& > p:nth-of-type(2)': {
        color: theme.palette.grey.dark
      },
      '& li': {
        lineHeight: '1.5em'
      }
    }
  }
});

function Profile({
  classes
}) {
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.userInfo}>
          <img src={user.avatar} alt="profile picture" />
          <Typography variant="h4" component="p">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography>{user.location}</Typography>
          <Typography>{user.email}</Typography>
        </div>
        <div className={classes.projects}>
          <Typography variant="h5" component="p">Projects</Typography>
          <Divider />
          <div className={classes.projectContainer}>
            {projects.map((project, index) => (
              <div key={index} className={classes.project}>
                <img src={project.media[0]} alt="" />
                <div>
                  <Typography variant="h5" component="p">
                    {project.title}
                  </Typography>
                  <Typography>{project.location}</Typography>
                  <ul>
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);