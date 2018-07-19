import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Card from './components/Card';
import Loading from './components/Loading';
import Home from './components/Home';
import Product from './components/Product';
import Nav from './components/Nav';
import data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      loading: true,
      cards: [],
    };
  }

  componentWillMount() {
    this.setState({
      cards: data,
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  toggleLogo = () => {
    this.setState(prevState => ({
      toggleLogo: !prevState.toggleLogo,
    }));
  };

  showBack = card => {
    const { cards } = this.state;
    cards[card.id].animation = 'card card-flip';
    console.log(cards);

    this.setState({ cards });
  };

  showFront = card => {
    const { cards } = this.state;
    cards[card.id].animation = 'card';
    console.log(cards);

    this.setState({ cards });
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
      <Router>
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
            <h1
              className={toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
              onClick={this.openNav}
            >
              Menu
            </h1>
            <Nav closeNav={this.closeNav} />
          </header>

          <Switch>
            <Route exact path="/" render={props => <Home cards={this.state.cards} />} />
            <Route exact path="/product" component={Product} />
          </Switch>
          {/* {loading ? (
            <Loading />
          ) : (
            <div className="Grid animated bounceInUp">
              {cards.map(card => (
                <Card
                  duration={150}
                  key={card.id}
                  card={card}
                  showBack={this.showBack}
                  showFront={this.showFront}
                />
              ))}
            </div>
          )} */}
        </div>
      </Router>
    );
  }
}

export default App;
