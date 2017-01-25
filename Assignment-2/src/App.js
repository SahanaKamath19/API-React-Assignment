import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import List from './List.js';


class App extends Component {
  constructor(){
    super();
    this.state={
      ingredients:'',
      dish:'',
      searchedMessage:false,
      data:[]
    }
     this.ingredients = this.ingredients.bind(this);
     this.dish = this.dish.bind(this);
     this.findMe = this.findMe.bind(this);
  }

  ingredients(e){this.setState({ingredients:e.target.value})};
  dish(e){this.setState({dish:e.target.value})};
  
  findMe(e){
  e.preventDefault();
  this.setState({searchedMessage:true});
  let url='http://www.recipepuppy.com/api/?i='+this.state.ingredients+'&q='+this.state.dish;
  
  $.get(url).then(response => {
      this.setState({
        data: JSON.parse(response)
      });
    });
  }

  render() {

    return (
      <div className="App container">
      <h1>CookIt!!</h1>
      <div className='icon center-block'></div>
        <form className="row">
          <div className="col-xs-6">
            <label className="text-center padding">Ingredients: </label>
            <input type="text" name="ingredients" placeholder="E.g. onion,tomato" onChange={this.ingredients}/>
          </div>
          <div className="col-xs-6">
            <label className="text-center padding">Dish: </label>
            <input type="text" name="dish" placeholder="E.g. Pasta" onChange={this.dish}/>
          </div>
          <button className="btn btn-primary button" onClick={this.findMe}>Find me</button>
        </form>
        <h3 display={this.state.searchedMessage} style={{display: this.state.searchedMessage ? 'block' : 'none' }}>You searched for Ingredients: "{this.state.ingredients}" and Dish: "{this.state.dish}"</h3>
       <List data={this.state.data.results}/>
      </div>
    );
  }
}

export default App;

// <List data={this.state.data.results}/>