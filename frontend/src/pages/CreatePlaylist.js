import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistCreate from '../components/playlist/PlaylistCreate'
import ProfilePreview from '../components/profile/ProfilePreview'

const CreatePlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [playlistPreviews, setPlaylistPreviews] = useState([]);
    const userId = useSelector((state) => state.user.userId);


    useEffect(() => {
        fetchPlaylists();
    }, []);

    const fetchPlaylists = async () => {
        try {
            const response = await fetch('http://localhost:3005/playlists', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ userId }), // Directly passing the userId
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();

            setPlaylists(json);
            setPlaylistPreviews([]); // Assuming this might be populated in the future
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <ProfilePreview />
            <div className="entry_content">
                <div className="navBar">
                    <Navbar playlists={playlists} />
                </div>
                <div className="main_content">
                    <PlaylistCreate />
                </div>
            </div>
            <CurrentSong />
        </div>
    );
};

export default CreatePlaylist;
