import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';

const HeaderBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid item xs={false} sm={1} lg={2} />
        <Grid container justify='space-between' alignItems='center'>
          <Typography style={{ fontWeight: 'bold', fontSize: '25px' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
              Perfect Plate
            </Link>
          </Typography>
          <TwitterIcon />
        </Grid>
        <Grid item xs={false} sm={1} lg={2} />
      </Toolbar>
    </AppBar>
  );
};
export default HeaderBar;
