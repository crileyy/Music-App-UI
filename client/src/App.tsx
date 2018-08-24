import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/good-beers')
            .then(response => response.json())
            .then(data => this.setState({beers: data, isLoading: false}));
    }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to YouTunes</h1>
        </header>
        <p className="App-intro">
          An app by Colin.
        </p>
      </div>
    );
  }
}

export default App;
