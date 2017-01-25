import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  render() {
    console.log("This is coming form listItems: " + this.props.items);
    return (
      <div className="ListItem">
      { this.props.items ? this.props.items.map(items => 
          <div>
          <div>{items.href}</div>
          <div>{items.ingredients}</div>
          <div>{items.thumbnail}</div>
          </div>
          ) : null }
      </div>
    );
  }
}

export default ListItem;