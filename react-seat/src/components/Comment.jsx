import React, { Component } from 'react';

export default class Comment extends Component {
  render () {
    return (
      <h3>
        { this.props.text }
      </h3>
    );
  }
}