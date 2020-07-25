import React from 'react';
import MealCard from './MealCard';
import { Grid, CircularProgress } from '@material-ui/core';

const MealCardList = ({ recipes }) => {
  return (
    <Grid container spacing={2}>
      {recipes ? (
        recipes.map((recipe, i) => {
          return recipes[i].nutrition ? (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <MealCard
                img={recipes[i].image}
                title={recipes[i].title}
                nutrients={recipes[i].nutrition.nutrients}
                id={recipes[i].id}
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <MealCard
                img={recipes[i].image}
                title={recipes[i].title}
                id={recipes[i].id}
              />
            </Grid>
          );
        })
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default MealCardList;
