import React, { Component } from 'react';
import Comment from './Comment';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          text: 'Bom post'
        },
        {
          text: 'Ótimo :)'
        }
      ],
      newCommentText: ''
    };

    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }
  
  handleSubmit (e) {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments, { text: this.state.newCommentText }]
    });

    this.setState({
      newCommentText: ''
    });
  }
    
  handleChange (e) {
   this.setState({ newCommentText: e.target.value }) 
  }

  render() {
    return (
      <div className='post-range'>
        <h2>
          { this.props.title }!
        </h2>
        <form onSubmit={ this.handleSubmit }>
          <input minLength="3" />
          <button type="submit">Comentar</button>
        </form>
        {
          this.state.comments.map((comment, index) => {
            return <Comment key={index} text={comment.text}/>
          })
        }
      </div>
    );
  }
}