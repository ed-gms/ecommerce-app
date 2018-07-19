import React from 'react';
import './Nav.css';

const Nav = props => (
  <div id="myNav" className="overlay">
    <a href="" className="closebtn" onClick={() => props.closeNav()}>
      &times;
    </a>
    <div className="overlay-content">
      <a href="">Vitamin</a>
      <a href="">Suplements</a>
      <a href="">Apparel</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Nav;
