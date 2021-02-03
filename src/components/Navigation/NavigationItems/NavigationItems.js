import React from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
  <div>
    <ul className='NavigationItems'>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='new-post'>New Post</NavigationItem>
    </ul>
  </div>
);

export default navigationItems;
