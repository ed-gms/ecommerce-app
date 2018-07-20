import React from 'react';
import Card from './Card';
import Loading from './Loading';

const Home = props => (
  <div>
    {props.loading ? (
      <Loading />
    ) : (
      <div className="Grid animated bounceInUp">
        {props.cards.map(card => (
          <Card
            duration={150}
            key={card.id}
            card={card}
            showBack={props.showBack}
            showFront={props.showFront}
          />
        ))}
      </div>
    )}
  </div>
);

export default Home;
