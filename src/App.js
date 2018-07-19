import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card';
import Loading from './components/Loading';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      loading: true,
      cards: [
        {
          id: 0,
          animation: 'card',
        },
        {
          id: 1,
          animation: 'card',
        },
        {
          id: 2,
          animation: 'card',
        },
        {
          id: 3,
          animation: 'card',
        },
        {
          id: 4,
          animation: 'card',
        },
        {
          id: 5,
          animation: 'card',
        },
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  toggleLogo = () => {
    this.setState(prevState => ({
      toggleLogo: !prevState.toggleLogo,
    }));
  };

  clickCard = card => {
    const { cards } = this.state;
    cards[card.id].animation = 'card animated zoomOut';
    console.log(cards);

    this.setState({
      cards,
    });
  };

  openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  render() {
    const { toggleLogo, cards, loading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={toggleLogo ? 'static-logo' : 'static-logo animated jello'}
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav}
          />
          <Nav closeNav={this.closeNav} />
        </header>
        {loading ? (
          <Loading />
        ) : (
          <div className="Grid">
            {cards.map(card => (
              <Card duration={150} key={card.id} card={card} clickCard={this.clickCard} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
