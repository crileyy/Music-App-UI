import React from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import Button from "./button";
import YouTube from "./youtube";
import YouTubeTest from "./youtube-test";
import SongView from "./SongView"

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
        <h1 className="App-music-title">MusicEasy</h1>
        <YouTube
          YTid={'0RDq5PKcN5g'}
          width={100}
          height={100}/>
        <div className="Songs">
          <SongView songName="I'll Try Anything Once" songArtist="The Strokes"/>
          <SongView songName="Bambi" songArtist="Hippo Campus"/>
          <SongView songName="Gold" songArtist="Brockhampton"/>
        </div>
      </div>

    );
  }
}

export default App;
