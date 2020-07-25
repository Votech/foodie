import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  ListItemText,
  List,
  ListItem,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBar from '../../components/HeaderBar';
import MealCard from '../../components/MealCard';

class RecipePage extends Component {
  state = {
    currentRecipe: [],
    similarRecipes: [],
    randomRecipes: [],
  };

  async componentDidUpdate(prevProps) {
    if (this.props.location.state.id !== prevProps.location.state.id) {
      const id = await this.props.location.state.id;
      const apiKey = '8f4c6941944345dbbf34a7f4e68dc645';
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&number=6&includeNutrition=true`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ currentRecipe: data });
      console.log(data);

      const url2 = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}&number=6&includeNutrition=true`;
      const response2 = await fetch(url2);
      const data2 = await response2.json();
      this.setState({ similarRecipes: data2 });
      console.log('similar recipes', data2);
      console.log('Hello! Iam componentDidUpdate');
    }
  }

  async componentDidMount() {
    const id = await this.props.location.state.id;
    const apiKey = '8f4c6941944345dbbf34a7f4e68dc645';
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&number=6&includeNutrition=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ currentRecipe: data });
    console.log(data);

    const url2 = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}&number=6&includeNutrition=true`;
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    this.setState({ similarRecipes: data2 });
    console.log('similar recipes', data2);

    const url3 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`;
    const response3 = await fetch(url3);
    const data3 = await response3.json();
    this.setState({ randomRecipes: data3.recipes });
    console.log('random recipes', data3.recipes);
  }

  render() {
    const {
      title,
      aggregateLikes,
      image,
      analyzedInstructions,
      readyInMinutes,
      extendedIngredients,
      servings,
    } = this.state.currentRecipe;

    return (
      <Grid container direction='column'>
        <HeaderBar />
        <Grid item container style={{ marginTop: '20px' }}>
          <Grid item xs={false} sm={2} />
          <Grid
            item
            container
            alignItems='flex-start'
            xs={12}
            sm={6}
            style={{ padding: '0 20px' }}
          >
            <Grid item container>
              <Paper
                elevation={2}
                style={{ marginBottom: '20px', width: '100%' }}
              >
                <Grid item container>
                  <Grid item xs={12}>
                    <Typography variant='h5'>{title}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='subtitle1'>
                      Likes: {aggregateLikes}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  spacing={2}
                  style={{ marginBottom: '20px' }}
                >
                  <Grid item xs={9}>
                    <img src={image} alt={title} style={{ width: '100%' }} />
                  </Grid>
                  <Grid item container direction='column' xs={3}>
                    <Typography variant='subtitle1'>
                      Cooking time <br />{' '}
                      <span style={{ fontWeight: 'bold' }}>
                        {readyInMinutes} min{' '}
                      </span>
                    </Typography>
                    <Typography variant='subtitle1'>
                      Servings <br />
                      <span style={{ fontWeight: 'bold' }}> {servings} </span>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Grid
                item
                container
                direction='column'
                style={{ marginBottom: '20px' }}
              >
                <Paper elevation={2}>
                  <Grid item style={{ padding: '20px' }}>
                    <Typography variant='h6'>Ingredinets</Typography>
                  </Grid>
                  <Grid item>
                    <List>
                      {extendedIngredients ? (
                        extendedIngredients.map((ingredient, i) => {
                          return (
                            <ListItem key={i} style={{ padding: '4px 16px' }}>
                              <ListItemText
                                primary={`
                            ${extendedIngredients[i].measures.metric.amount}
                            ${extendedIngredients[i].measures.metric.unitShort}
                            ${extendedIngredients[i].name}
                            `}
                              />
                            </ListItem>
                          );
                        })
                      ) : (
                        <CircularProgress />
                      )}
                    </List>
                  </Grid>
                </Paper>
              </Grid>
              <Grid
                item
                container
                direction='column'
                style={{ marginBottom: '20px' }}
              >
                <Paper elevation={2}>
                  <Typography variant='h6' style={{ padding: '20px' }}>
                    Instructions
                  </Typography>
                  <List>
                    {analyzedInstructions ? (
                      analyzedInstructions[0].steps ? (
                        analyzedInstructions[0].steps.map((step, i) => {
                          return (
                            <ListItem key={i} style={{ padding: '4px 16px' }}>
                              <ListItemText
                                primary={`
                            ${analyzedInstructions[0].steps[i].number}
                            ${analyzedInstructions[0].steps[i].step}
                            `}
                              />
                            </ListItem>
                          );
                        })
                      ) : (
                        <CircularProgress />
                      )
                    ) : (
                      <CircularProgress />
                    )}
                  </List>
                </Paper>
              </Grid>
              <Grid
                item
                container
                direction='column'
                style={{ marginBottom: '20px' }}
              >
                <Paper elevation={2}>
                  <Typography variant='h6' style={{ padding: '20px' }}>
                    Similar Recipes
                  </Typography>
                  <List>
                    {this.state.similarRecipes ? (
                      this.state.similarRecipes.map((recipe, i) => {
                        return (
                          <ListItem
                            style={{ padding: '4px 16px' }}
                            button
                            component={Link}
                            key={`${i}b`}
                            to={{
                              pathname: `/recipe/${this.state.similarRecipes[i].id}`,
                              state: { id: this.state.similarRecipes[i].id },
                            }}
                          >
                            <ListItemText
                              primary={`
                            ${this.state.similarRecipes[i].title}
                            `}
                            />
                          </ListItem>
                        );
                      })
                    ) : (
                      <CircularProgress />
                    )}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={2} xs={12} sm={2}>
            <Grid item>
              <Typography variant='h5'>Recommended Recipes</Typography>
            </Grid>
            {this.state.randomRecipes ? (
              this.state.randomRecipes.map((recipe, i) => {
                return (
                  <Grid item width='100%' key={i}>
                    <MealCard
                      img={this.state.randomRecipes[i].image}
                      title={this.state.randomRecipes[i].title}
                      id={this.state.randomRecipes[i].id}
                    />
                  </Grid>
                );
              })
            ) : (
              <CircularProgress />
            )}
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
  }
}

export default RecipePage;
