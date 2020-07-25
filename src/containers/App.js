import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home/Home';
import RecipePage from '../pages/RecipePage/RecipePage';

class App extends Component {
  state = {
    value: '',
    recipes: [],
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const apiKey = '8f4c6941944345dbbf34a7f4e68dc645';
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${this.state.value}&number=6&addRecipeNutrition=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipes: data.results });
    console.log(data);
    console.log(this.state.value);
  };

  async componentDidMount() {
    const apiKey = '8f4c6941944345dbbf34a7f4e68dc645';
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home
                {...props}
                recipes={this.state.recipes}
                value={this.state.value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route path='/recipe/:id' component={RecipePage} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
