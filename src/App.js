import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import ProductDetails from './components/ProductDetails';
import PgNotFound from './components/PgNotFound';
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
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  cards={cards}
                  loading={loading}
                  showBack={this.showBack}
                  showFront={this.showFront}
                />
              )}
            />

            <Route
              path="/product/:id"
              render={props => {
                const cardIndex = props.location.pathname.replace('/product/', '');
                return <ProductDetails card={cards[cardIndex]} />;
              }}
            />
            <Route component={PgNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
