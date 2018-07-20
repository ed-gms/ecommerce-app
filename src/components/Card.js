import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './Card.css';

const Card = props => (
  <LazyLoad height={650} offset={-100}>
    <div className={props.card.animation}>
      <Link to={`/product/${props.card.id}`}>
        <div className="front">
          <img src="juice.jpg" alt="Avatar" className="card-image" />
          <div className="container">
            <h3>{props.card.title}</h3>
            <h3>
              <span className="price"> ${props.card.price}</span>
            </h3>
            <p>{props.card.description}</p>
          </div>
        </div>
        <div className="container-back back" onClick={() => props.showFront(props.card)}>
          <h3>
            Vitamin Juice <span className="price">$24.99</span>
          </h3>
          <p>{props.card.description}</p>
        </div>
      </Link>
    </div>
  </LazyLoad>
);

export default Card;
