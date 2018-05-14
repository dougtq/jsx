import React, { Component } from 'react';
import Post from './Post'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Seat</h1>
        <hr/>
        <div>
          <Post title='First Post'/>
          <Post title='Second Post'/>
        </div>
      </div>
    );
  }
}