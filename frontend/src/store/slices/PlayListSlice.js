import { createSlice } from '@reduxjs/toolkit'

export const playListsSlice = createSlice({
    name: 'playlists',
    initialState: {
        playlists: []
    },
    reducers: {
        setPlaylists: (state, action) => {
            state.playlists = action.payload;
        }
    },
});

export const { setPlaylists } = playListsSlice.actions

export default playListsSlice.reducer