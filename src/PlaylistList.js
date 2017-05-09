import React from 'react';

import {Data as songs} from './data/songs.json';
console.log(songs);
const PlaylistList = () => {
    return (
        <div>
           <ul className="playlist--list">
                {songs.map((song, i) => 
                    <div key={song}>
                        <a href="#">This is a song title</a>
                    </div>
                )}
           </ul>
        </div>
    )
}
export default PlaylistList;
