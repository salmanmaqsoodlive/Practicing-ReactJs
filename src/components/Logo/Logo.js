import React from 'react';

import './Logo.css';
import { NavLink } from 'react-router-dom';

const logo = () => (
  <NavLink to='/'>
    <h3 className='Logo'>Social</h3>
  </NavLink>
);

export default logo;
