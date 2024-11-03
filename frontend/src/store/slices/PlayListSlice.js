import { createSlice } from '@reduxjs/toolkit'

export const playListsSlice = createSlice({
    name: 'playlists',
    initialState: {
        playlists: [],
        currentSong: ''
    },
    reducers: {
        setPlaylists: (state, action) => {
            state.playlists = action.payload;
        },
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        }
    },
});

export const { setPlaylists, setCurrentSong } = playListsSlice.actions

export default playListsSlice.reducer