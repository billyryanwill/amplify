/*
 * action types
 */

export const ADD_SONGTOPLAYLIST = 'ADD_SONGTOPLAYLIS'
export const PLAY_SONG = 'PLAY_SONG'
export const SKIP_SONG = 'SKIP_SONG'
export const TOGGLE_DOWNLOAD = 'TOGGLE_DOWNLOAD'


export const FETCH_SONGS = 'FETCH_SONGS'
export const RECEIVE_SONGS = 'RECEIVE_SONGS'


/*
 * action creators
 */

export function addSongToPlayList(id) {
  return { type: ADD_SONGTOPLAYLIST, id }
}

export function playSong(bool) {
  return { type: PLAY_SONG, bool }
}
export function skipSong(bool) {
  return { type: SKIP_SONG, bool }
}

export function toggleDownload(index) {
  return { type: TOGGLE_DOWNLOAD, index }
}

export function fetchSongs(userId){
  return {
    type: FETCH_SONGS,
    userId
  }
}
export function receiveSongs(userId, json){
  return {
    type:RECEIVE_SONGS,
    userId,
    songs:json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
