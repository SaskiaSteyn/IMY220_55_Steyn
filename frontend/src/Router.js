//functional component that will be used to route the different pages of the application

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import AddFriend from './pages/AddFriend';
import AddSong from './pages/AddSong';
import CreatePlaylist from './pages/CreatePlaylist';
import EditPlaylist from './pages/EditPlaylist';
import EditingProfile from './pages/EditProfile';
import FriendProfile from './pages/FriendProfile';
import Friends from './pages/Friends';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import PersonalPlaylists from './pages/PersonalPlaylists';
import Playlist from './pages/Playlist';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { setDisplayName, setEmail, setProfilePicture, setPronouns, setUserId, setUserName } from './store/slices/UserSlice'


const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const dispatch = useDispatch();


    useEffect(() => {
        // Get userId from localStorage
        const userId = localStorage.getItem('userId');
        // If userId exists, set login state to true
        refresh(userId);
    }, []);

    const refresh = async (userId) => {
            try {
                const response = await fetch('http://localhost:3005/refresh', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId: userId,
                    }),
                });
                const data = await response.json();
                
                if (data.success) {
                    localStorage.setItem('userId', data.user._id);
                    dispatch(setUserId(data.user._id));
                    dispatch(setUserName(data.user.username));
                    dispatch(setDisplayName(data.user.displayname));
                    dispatch(setPronouns(data.user.pronouns));
                    dispatch(setEmail(data.user.email));
                    dispatch(setProfilePicture(data.user.profilePicture));
                } else {
                    // Set login error message
                }
            } catch (error) {
                console.error("Error logging in:", error);
            }
    };

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage setLoginState={setIsLoggedIn} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/editprofile" element={<EditingProfile />} />
                    <Route path="/playlist" element={<Playlist />} />
                    <Route path="/playlist/:playlistID" element={<Playlist />} />
                    <Route path="/editplaylist/:playlistID" element={<EditPlaylist />} />
                    <Route path="/createplaylist" element={<CreatePlaylist />} />
                    <Route path="/addsong" element={<AddSong />} />
                    <Route path="/addfriend" element={<AddFriend />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/friendprofile" element={<FriendProfile />} />
                    <Route path="/friendprofile/:friendID" element={<FriendProfile />} />
                    <Route path="/personalplaylists" element={<PersonalPlaylists />} />
                </Routes>
            </BrowserRouter>
    );
};

export default Router;