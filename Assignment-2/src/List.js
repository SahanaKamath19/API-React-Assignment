import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

class List extends Component {
  constructor(){
      super();
      this.state = {
        items:''
      }
  }
    render() {
    //console.log(this.props.data);
    return (
      <div className="List">
        { this.props.data ? this.props.data.map(recipe => 
          <div>
          <div>{recipe.title}</div>
          <ListItem items={this.props.data}/>
          </div>
          ) : null }
      </div>
    );
  }
}

export default List;