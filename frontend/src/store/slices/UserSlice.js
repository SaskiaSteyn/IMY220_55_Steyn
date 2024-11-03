import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: "",
        userName: "",
        displayName: "",
        pronouns: "",
        email: "",
        profilePicture: ""
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
        setPronouns: (state, action) => {
            state.pronouns = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        }
    },
});

export const { setUserId, setUserName, setDisplayName, setPronouns, setEmail, setProfilePicture } = userSlice.actions

export default userSlice.reducer