import React, { useEffect, useState } from 'react'
import { FaImage, FaPen } from "react-icons/fa6"
import { Link, useParams } from 'react-router-dom'
import DeleteSong from '../song/DeleteSong'

const EditingPlaylist = () => {
    const { playlistID } = useParams(); // Use useParams to access the playlist ID from the URL
    const [playlist, setPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Fetch playlist data based on playlistID
        const fetchPlaylistData = async () => {
            try {
                const response = await fetch('http://localhost:3005/playlist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: playlistID })
                });
                const playlistData = await response.json();
                setPlaylist(playlistData);
                console.log(playlistData.songs);
                setSongs(playlistData.songs.sort((a,b) => new Date(a.timestamp_added) - new Date(b.timestamp_added)) || []);
            } catch (error) {
                console.error("Error fetching playlist data:", error);
            }
        };

        fetchPlaylistData();
    }, [playlistID]); // Re-run the effect if playlistID changes

    return (
        <div>
            <div className="playlist_name">
                <p className="coverimage"><FaImage /></p>
                <h2>Playlist name</h2>
                <FaPen />
                <div className="playlist_edit_btns">
                    <Link to="/playlist"><button>Discard</button></Link>
                    <Link to="/playlist"><button>Save changes</button></Link>
                </div>
            </div>

            <div className="playlist_header">
                <p>Number</p>
                <p>Title of the song</p>
            </div>
            <div className="line"><hr /></div>
            <div className="songs">
            {songs.map((song, index) => (
                    <DeleteSong key={index} song={song} index={index} />
                ))}
            </div>
        </div>
    );
};

export default EditingPlaylist;
