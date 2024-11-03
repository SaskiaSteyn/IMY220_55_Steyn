import React, { useEffect, useState } from 'react'
import Search from '../home/Search'
import SingleSong from './Song'

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Fetch playlist data based on playlistID
        const fetchSongsData = async () => {
            try {
                const response = await fetch('http://localhost:3005/songs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });
                const songData = await response.json();
                setSongs(songData || []);
            } catch (error) {
                console.error("Error fetching songs data:", error);
            }
        };

        fetchSongsData();
    }, []); // Re-run the effect if playlistID changes

    return (
        <div>
            <div className="add_song_edit">
                <h2>Add a song</h2>
            </div>
            <Search />
            <div className="list_of_songs">
                {songs.map((song, index) => (
                    <SingleSong key={index} song={song} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default SongList;
