import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import CurrentPlaylist from '../components/home/CurrentPlaylist'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistPreview from '../components/playlist/PlaylistPreview'
import ProfilePreview from '../components/profile/ProfilePreview'
import { setPlaylists } from '../store/slices/PlayListSlice'
import { setDisplayName, setEmail, setProfilePicture, setPronouns, setUserName } from '../store/slices/UserSlice'

const Home = () => {
    const location = useLocation();
    // const [playlists, setPlaylists] = useState([]);
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists.playlists);

    

    useEffect(() => {
        console.log(location.state);

        const userIdFromLocation = location.state?.userId; // Use optional chaining to avoid errors
        if (userIdFromLocation) {
            console.log("Setting userId:", userIdFromLocation);
            setUserId(userIdFromLocation);
            refresh(userIdFromLocation);
            fetchPlaylists(userIdFromLocation);
        }
        else{
            fetchPlaylists(null);
        }
    }, [location]); // Dependencies array to run the effect when the location changes

    const fetchPlaylists = async (userId) => {
        try {
            console.log("Fetching playlists for userId:", userId);
            const response = await fetch('http://localhost:3005/playlists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }), // Directly passing the userId
            });
            const data = await response.json();
            console.log("Fetched playlists:", data); // Log fetched playlists
            console.log("Response:", response);
            if (response.ok) {
                console.log("Setting playlists:", data);
                dispatch(setPlaylists(data)); // Update state with fetched playlists
            } else {
                console.error("Error fetching playlists:", data.message);
            }
        } catch (error) {
            console.error("Error fetching playlists:", error);
        }
    };

    const refresh = async (userId) => {
        console.log("Refresh called");
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
        <div className="fullPage">
            <div className="header">
                <ProfilePreview />
                <CurrentPlaylist />
            </div>

            <div className="entry_content">
                <div className="navBar">
                    <Navbar playlists={playlists} />
                </div>
                <div className="main_content">
                    <div className="main_heading">
                        <h2>Your recent listens</h2>
                    </div>
                    <div className="playlist_list">
                        {playlists.map((playlist) => (
                            <PlaylistPreview
                                key={playlist._id}
                                playlistID={playlist._id}
                                playlistName={playlist.playlist_name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <CurrentSong />
        </div>
    );
};

export default Home;
