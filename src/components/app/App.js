import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Team from 'components/Team';
import Home from 'components/Home';
import Navigation from 'components/Navigation';
import 'css/App.css';


class App extends Component {
  state = {
	  index: 0,
  };

	_handleClick = (index) => {
		this.setState({ index })
  };

  render() {
    const { index } = this.state;

    return (
      <div className="App">
        <Header />
        <Navigation onClick={this._handleClick}/>
        {(index === 0) && <Home onClick={this._handleClick} />}
        {(index === 1) && <Team />}
        {(index === 2) && <div style={{heigth: '100px', background: 'green'}}>{`Le projet`}</div>}
        {(index === 3) && <div style={{heigth: '100px', background: 'green'}}>{`A qui s'adresser`}</div>}
        {(index === 4) && <div style={{heigth: '100px', background: 'green'}}>{`Vos temoignages`}</div>}
        {(index === 5) && <div style={{heigth: '100px', background: 'green'}}>{`Vos avis`}</div>}
        <Footer />
      </div>
    );
  }
}

export default App;
