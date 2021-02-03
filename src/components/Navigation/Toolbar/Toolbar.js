import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import './Toolbar.css';

const toolbar = () => (
  <div>
    <header className={'Toolbar'}>
      <div>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  </div>
);

export default toolbar;
