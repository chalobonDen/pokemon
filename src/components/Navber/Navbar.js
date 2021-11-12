import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          exact
          to="/"
          activeStyle={{
            color: '#42B983',
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/pokemon"
          activeStyle={{
            color: '#42B983',
          }}
        >
          Pokemon
        </NavLink>
        <NavLink
          to="/function1"
          activeStyle={{
            color: '#42B983',
          }}
        >
          Function 1
        </NavLink>
        <NavLink
          to="/function2"
          activeStyle={{
            color: '#42B983',
          }}
        >
          Function 2
        </NavLink>
        <NavLink
          to="/function3"
          activeStyle={{
            color: '#42B983',
          }}
        >
          Function 3
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
