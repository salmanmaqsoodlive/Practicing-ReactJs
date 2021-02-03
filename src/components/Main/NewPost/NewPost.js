import React, { Component } from 'react';
import axios from '../../../axios-post';
import './NewPost.css';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      posts: [],
    };
    this.newPostHandler = this.newPostHandler.bind(this);
  }
  componentDidMount() {}

  newPostHandler() {
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    axios
      .post('/post.json', post)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      title: ' ',
      body: ' ',
    });
  }

  render() {
    return (
      <div className='NewPost'>
        <h1>New Post</h1>
        <input
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
          className='PostTitle'
          type='text'
          placeholder='Title'
        />
        <textarea
          value={this.state.body}
          onChange={(event) => this.setState({ body: event.target.value })}
          className='PostBody'
          type='text'
          placeholder='Post Body'
        />
        <button className='PostButton' onClick={this.newPostHandler}>
          Post
        </button>
      </div>
    );
  }
}

export default NewPost;
