import React from 'react';
import { Grid } from '@material-ui/core';
import HeaderBar from '../../components/HeaderBar';
import SearchBar from '../../components/SearchBar';
import MealCardList from '../../components/MealCardList';

const Home = ({
  search,
  maxFat,
  maxCarbs,
  maxCalories,
  minProtein,
  handleChange,
  handleSubmit,
  recipes,
}) => {
  return (
    <>
      <Grid container direction='column'>
        <Grid item>
          <HeaderBar />
        </Grid>
        <Grid item container justify='center'>
          <Grid item xs={false} sm={1} lg={2} />
          <SearchBar
            search={search}
            maxFat={maxFat}
            maxCarbs={maxCarbs}
            maxCalories={maxCalories}
            minProtein={minProtein}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Grid item xs={false} sm={1} lg={2} />
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
