import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => (
  <h1>Você tem { props.todos.length } todos</h1>  
);

const mapStateToProps = state => ({
  todos: state.todos,
});

// const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps)(Counter)
