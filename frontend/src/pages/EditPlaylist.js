import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import EditingPlaylist from '../components/playlist/EditPlaylist'
import ProfilePreview from '../components/profile/ProfilePreview'

const EditPlaylist = () => {
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
            console.log(json);

            setPlaylists(json);
            setPlaylistPreviews([]); // Assuming this might be populated in the future
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="fullPage">
            <ProfilePreview />
            <div className="entry_content">
                <div className="navBar">
                    <Navbar playlists={playlists} />
                </div>
                <div className="main_content">
                    <EditingPlaylist />
                </div>
            </div>
            <CurrentSong />
        </div>
    );
};

export default EditPlaylist;
