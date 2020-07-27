import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
  return (
    <AppBar
      position='static'
      style={{ bottom: '0', top: 'auto', marginTop: '20px' }}
    >
      <Toolbar>
        <Grid container justify='center' alignItems='center'>
          <Typography>Created with </Typography>
          <FavoriteIcon style={{ margin: '0 5px' }} />
          <Typography> by Wojciech Mietlinski</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
