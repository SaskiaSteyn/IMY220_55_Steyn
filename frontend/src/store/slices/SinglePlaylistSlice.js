import { createSlice } from '@reduxjs/toolkit'

export const SinglePlaylistsSlice = createSlice({
    name: 'singlePlaylist',
    initialState: {
        playlist_name:"",
        songs: [],
        picture: "",
    },
    reducers: {
        setSinglePlaylistName: (state, action) => {
            state.playlist_name = action.payload;
        },
        setSinglePlaylistSongs: (state, action) => {
            state.songs = action.payload;
        },
        setSinglePlaylistPicture: (state, action) => {
            state.picture = action.payload;
        },
    },
});

export const { setSinglePlaylistName, setSinglePlaylistSongs, setSinglePlaylistPicture } = SinglePlaylistsSlice.actions

export default SinglePlaylistsSlice.reducer