import React from 'react';
import { Grid } from '@material-ui/core';
import HeaderBar from '../../components/HeaderBar';
import SearchBar from '../../components/SearchBar';
import MealCardList from '../../components/MealCardList';

const Home = ({ value, handleChange, handleSubmit, recipes }) => {
  return (
    <>
      <Grid container direction='column'>
        <Grid item>
          <HeaderBar />
        </Grid>
        <Grid item container justify='center'>
          <Grid item xs={false} sm={1} md={2} />
          <SearchBar
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Grid item xs={false} sm={1} md={2} />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={1} lg={2} />
          <Grid item xs={12} sm={10} lg={8}>
            <MealCardList recipes={recipes} />
          </Grid>
          <Grid item xs={false} sm={1} lg={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
