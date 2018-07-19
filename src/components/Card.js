import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './Card.css';

const Card = props => (
  <LazyLoad height={650} offset={-100}>
    <div className={props.card.animation}>
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img src="juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>
            Vitamin <span className="price">$24.99</span>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quisquam sint modi? Illo
            eius totam nihil suscipit explicabo neque ipsa, delectus aut accusamus voluptate soluta,
            dolor eligendi quam aliquid nostrum.
          </p>
        </div>
      </div>
      <div className="container-back back" onClick={() => props.showFront(props.card)}>
        <h3>
          Vitamin Juice <span className="price">$24.99</span>
        </h3>
        <p>{props.card.description}</p>
      </div>
    </div>
  </LazyLoad>
);

export default Card;
