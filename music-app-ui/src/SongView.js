import React from 'react';
import './SongView.css';

// have a text box that takes input to pause and play video
export default class SongView extends React.Component {

	render() {
		return (
			<ul className="SongView">
				<span className="song-info">{this.props.songName + " " + this.props.songArtist}</span>
				<button className="play-song">Play</button>
				<button className="pause-song">Pause</button>
			</ul>
			);
	}
}