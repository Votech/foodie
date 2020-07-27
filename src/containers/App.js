import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home/Home';
import RecipePage from '../pages/RecipePage/RecipePage';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

class App extends Component {
  state = {
    value: '',
    search: '',
    maxCalories: '',
    maxCarbs: '',
    maxFat: '',
    minProtein: '',
    numberOfRecipes: '10',
    recipes: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let x = this.state.search;
    if (this.state.maxCalories) {
      x += `&maxCalories=${this.state.maxCalories}`;
    }
    if (this.state.maxCarbs) {
      x += `&maxCarbs=${this.state.maxCarbs}`;
    }
    if (this.state.maxFat) {
      x += `&maxFat=${this.state.maxFat}`;
    }
    if (this.state.minProtein) {
      x += `&minProtein=${this.state.minProtein}`;
    }

    const apiKey = '8f4c6941944345dbbf34a7f4e68dc645';
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${x}&number=${this.state.numberOfRecipes}&addRecipeNutrition=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipes: data.results });
    console.log(data);
    console.log(this.state.value);
  };

  async componentDidMount() {
    const apiKey = '8f4c6941944345dbbf34a7f4e68dc645';
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  render() {
    return (
      <>
        <ScrollToTop />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home
                {...props}
                recipes={this.state.recipes}
                search={this.state.search}
                maxFat={this.state.maxFat}
                maxCarbs={this.state.maxCarbs}
                maxCalories={this.state.maxCalories}
                minProtein={this.state.minProtein}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route path='/recipe/:id' component={RecipePage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
