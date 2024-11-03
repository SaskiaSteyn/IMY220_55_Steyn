import React, { useEffect, useState } from 'react'

const AddSongToPlaylist = ({song}) => {
    const [playlist, setPlaylist] = useState([]);
    
    useEffect(() => {
        // Fetch playlist data based on playlistID
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
                    setPlaylist(data); // Update state with fetched playlists
                } else {
                    console.error("Error fetching playlists:", data.message);
                }
            } catch (error) {
                console.error("Error fetching playlists:", error);
            }
        };

        fetchPlaylists();
    }, []); // Re-run the effect if playlistID changes

    const addSong = async (playlist) => {
        //playlist that has been selected 
        //Song ID that has been selected

        //fetch request to add song to playlist
        try {
            const response = await fetch('http://localhost:3005/addSongToPlaylist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    playlist_id: playlist._id,
                    song_id: song._id,
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error adding song to playlist:", error);
        }   
    };

    return (
        <div className="addToPlaylist">
            <h3>Select a playlist</h3>
            <br />
            <div>
                {playlist.map((playlist, index) => (
                    <div key={index}>
                        <button onClick={() => addSong(playlist)}>{playlist.playlist_name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddSongToPlaylist;
