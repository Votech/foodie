import React from 'react';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px 0',
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  searchInput: {
    width: '100%',
  },
  searchButton: {
    height: '100%',
    width: '100%',
  },
}));

const SearchBar = ({
  search,
  maxFat,
  maxCarbs,
  maxCalories,
  minProtein,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs={false}
      sm={10}
      md={10}
      lg={8}
      className={classes.root}
    >
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid
          item
          container
          justify='space-between'
          xs={12}
          spacing={2}
          className={classes.searchBar}
        >
          <Grid item xs={12} md={2}>
            <TextField
              className={classes.searchInput}
              name='search'
              id='standard-search'
              label='Search recipe'
              type='search'
              variant='filled'
              value={search}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              className={classes.searchInput}
              name='maxCalories'
              id='standard-search'
              label='max Calories'
              type='search'
              variant='filled'
              value={maxCalories}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              className={classes.searchInput}
              name='maxFat'
              id='standard-search'
              label='max Fat'
              type='search'
              variant='filled'
              value={maxFat}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              className={classes.searchInput}
              name='maxCarbs'
              id='standard-search'
              label='max Carbs'
              type='search'
              variant='filled'
              value={maxCarbs}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              className={classes.searchInput}
              name='minProtein'
              id='standard-search'
              label='min Protein'
              type='search'
              variant='filled'
              value={minProtein}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Button
              className={classes.searchButton}
              variant='contained'
              color='primary'
              type='submit'
            >
              Primary
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default SearchBar;
