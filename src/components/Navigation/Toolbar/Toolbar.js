import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideDrawer from '../SideDrawer/SideDrawer';

import './Toolbar.css';

const toolbar = () => (
  <div>
    <header className={'Toolbar'}>
      <div>MENU</div>
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
