import React from 'react';
import movieData from './MovieData.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="nav-bar">
        <header className="nav-bar__header">
          <h1 className="header__app-name"></h1>
          <img className="header__logo" src=""/>
        </header>
      </div>
    );
  }
}

export default App;
