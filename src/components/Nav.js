import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>
      &times;
    </a>
    <div className="overlay-content">
      <Link to="/" onClick={() => props.closeNav()}>
        Home
      </Link>
      <Link to="/product" onClick={() => props.closeNav()}>
        Product
      </Link>
      <a href="">Apparel</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Nav;
