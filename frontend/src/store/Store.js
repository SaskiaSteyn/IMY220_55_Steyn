import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import playlistsReducer from './slices/PlayListSlice'
import singlePlaylistReducer from './slices/SinglePlaylistSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        playlists: playlistsReducer,
        singlePlaylist: singlePlaylistReducer,
    },
  })