import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
    }

    this.addNewTodo = this.addNewTodo.bind(this);
    this.updateTodoText = this.updateTodoText.bind(this);
  }

  addNewTodo () {
    if (this.state.newTodoText !== '') {
      this.props.addTodo(this.state.newTodoText);
      this.setState({ newTodoText: '' })
    }
  }

  updateTodoText (value) {
      this.setState({
        newTodoText: value,
      })
  }


  render() {
    return (
      <div>
        <ul>
        { 
          this.props.todos.map(todo => (<li key={todo.id}>{todo.text}</li>)
        )}
        </ul>

        <input value={ this.state.newTodoText } minLength="1" onChange={ (e) => this.updateTodoText(e.target.value) } type="text"/>
        <button onClick={ this.addNewTodo }>Adicionar todo</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
