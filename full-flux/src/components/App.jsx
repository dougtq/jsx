import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import TodoList from './todoList';
import Footer from './Footer';

import '../styles/app.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className='App'>
            <header className='App-header'>
              <h1 className='App-title'>Welcome to Flux Example</h1>
            </header>
            <TodoList />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
