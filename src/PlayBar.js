import React, { Component } from 'react';
import SongPreview from './SongPreview';
import DurationBar from './DurationBar';
import PlayControls from './PlayControls';
import SpotifyControls from './SpotifyControls';





class PlayBar extends Component {
  render() {
    return (
        <section className="spotify--play-bar">
            <SongPreview/>
            <section className="spotify-bar--play-controls">
              <PlayControls/>
              <DurationBar/>
            </section>
            <SpotifyControls/>
        </section>
    );
  }
}

export default PlayBar;
