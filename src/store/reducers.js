import { combineReducers } from 'redux'
import { ADD_SONGTOPLAYLIST, PLAY_SONG, TOGGLE_DOWNLOAD, SKIP_SONG} from './actions'


const initialState = {
  playSong: {},
  songs: [],
  playlists:[]
}

function playlists(state = [], action) {
  switch (action.type) {
    case ADD_SONGTOPLAYLIST:
      return [
        ...state,
        {
          id: action.id,
          downloaded: false
        }
      ]
    default:
      return state
  }
}

function songs(state = [], action){
  switch (action.type) {
    case TOGGLE_DOWNLOAD:
      return state.map((song, index) => {
        if (index === action.index) {
          return Object.assign({}, song, {
            downloaded: !song.downloaded
          })
        }
        return song
      })
    default:
      return state
  }
}

function playControls(state = {}, action){
  switch(action.type){
    case PLAY_SONG:
      return [
        ...state,
        {
          id: action.id,
          downloaded: false
        }
      ]
      case SKIP_SONG:
        return [
          ...state,
          {
            id: action.id,
          }
        ]
      default:
        return state
  }
}

const amplifyApp = combineReducers({
  playlists,
  songs,
  playControls
})

export default amplifyApp