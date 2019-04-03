import React, { Component } from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Team from 'components/Team';
import Home from 'components/Home';
import Project from 'components/Project';
import Footer from 'components/Footer';
import 'css/App.css';


class App extends Component {
  state = {
	  index: 2,
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
        {(index === 2) && <Project />}
        {(index === 3) && <div style={{heigth: '100px', background: 'green'}}>{`A qui s'adresser`}</div>}
        {(index === 4) && <div style={{heigth: '100px', background: 'green'}}>{`Vos temoignages`}</div>}
        {(index === 5) && <div style={{heigth: '100px', background: 'green'}}>{`Vos avis`}</div>}
        <Footer />
      </div>
    );
  }
}

export default App;
