import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem">
      return (
          <div>{this.props.items}</div>
          )
      </div>
    );
  }
}

export default ListItem;