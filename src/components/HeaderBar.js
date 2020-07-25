import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const HeaderBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography varinat='h6'>Foodie</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default HeaderBar;
