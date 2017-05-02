import React, { Component } from 'react';
import logo from './logo.svg';


class SongPreview extends Component {
  render() {
    return (
        <section className="song-preview">
            <figure>
              <img src="https://unsplash.it/300" alt=""/>
              <figcaption>
                <a>This is a song title</a>
                <a>Ben Smith</a>
              </figcaption>
            </figure>
        </section>
    );
  }
}

export default SongPreview;
