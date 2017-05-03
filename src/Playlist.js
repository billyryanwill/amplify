import React from 'react';
import DownloadToggle from './DownloadToggle';
import PlaylistHeader from './PlaylistHeader';
import PlaylistFilter from './PlaylistFilter';
import PlaylistList from './PlaylistList';

const Playlist = () => {
    return (
        <section>
            <PlaylistHeader/>
            <div>
                <PlaylistFilter/>
                <DownloadToggle/>
            </div>
            <PlaylistList/>
        </section>
    )
}
export default Playlist;
