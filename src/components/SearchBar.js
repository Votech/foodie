import React from 'react';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0',
  },
  form: {
    width: '100%',
    display: 'flex',
  },
  searchInput: {
    width: '98%',
  },
  searchButton: {
    height: '100%',
    width: '100%',
  },
}));

const SearchBar = ({ value, handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <Grid item container xs={false} sm={8} className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid
          item
          container
          justify='space-between'
          xs={12}
          className={classes.searchBar}
        >
          <Grid item xs={10}>
            <TextField
              className={classes.searchInput}
              id='outlined-search'
              label='Search field'
              type='text'
              variant='outlined'
              value={value}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
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
