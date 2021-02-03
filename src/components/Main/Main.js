import React, { Component } from 'react';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <h1>Main</h1>
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' exact component={NewPost} />
      </div>
    );
  }
}

export default Main;
