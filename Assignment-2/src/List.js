import React, { Component } from 'react';
import './App.css';
//import ListItem from './ListItem.js';

class List extends Component {
    render() {
    console.log(this.props.data);
    return (
      <div className="ListItem">
      </div>
    );
  }
}

export default List;