import React from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import Button from "./button";
import YouTube from "./youtube";
import YouTubeTest from "./youtube-test";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <YouTube
          YTid={'BoEKWtgJQAU'}
          width={100}
          height={100}/>
      <Button/>
      </div>

    );
  }
}

export default App;
