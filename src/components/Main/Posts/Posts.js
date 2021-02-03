import React, { Component } from 'react';

import './Posts.css';
import axios from '../../../axios-post';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/post.json')
      .then((response) => {
        let content = [];
        for (var i in response.data) {
          content.push({ id: i, value: response.data[i] });
        }
        this.setState({ posts: content });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <div className='Posts' key={post.id}>
          <h3>{post.value.title}</h3>
          <p>{post.value.body}</p>
        </div>
      );
    });
    return <div>{posts}</div>;
  }
}
export default Posts;
