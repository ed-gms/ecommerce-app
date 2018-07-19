import React from 'react';
import './Card.css';

const Card = props => (
  <div className={props.card.animation} onClick={() => props.clickCard(props.card)}>
    <img src="juice.jpg" alt="Vitamin Juice" className="card-image" />
    <div className="container">
      <h3>
        Vitamin Juice <span className="price">$25.00</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit deleniti sequi
        ea laborum ullam ut dolore, ratione reprehenderit pariatur aliquam sed molestiae obcaecati
        accusamus debitis magnam mollitia quod officiis?
      </p>
    </div>
  </div>
);

export default Card;
