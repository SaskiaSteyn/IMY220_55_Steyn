import React, { useEffect, useState } from 'react'
import { FaImage, FaPen } from "react-icons/fa6"
import { Link, useParams, useNavigate } from 'react-router-dom'
import DeleteSong from '../song/DeleteSong'

const EditingPlaylist = () => {
    const { playlistID } = useParams(); // Use useParams to access the playlist ID from the URL
    const [playlist, setPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);
    const navigate = useNavigate();
    const [playlistName, setPlaylistName] = useState('');

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
                setSongs(playlistData.songs.sort((a,b) => new Date(a.timestamp_added) - new Date(b.timestamp_added)) || []);
                setPlaylistName(playlistData.playlist_name);
            } catch (error) {
                console.error("Error fetching playlist data:", error);
            }
        };

        fetchPlaylistData();
    }, [playlistID]); // Re-run the effect if playlistID changes

    const saveChanges = () => {
        // Save changes to the playlist and send a request to the server
        const updatedPlaylist = { ...playlist, songs, playlist_name: playlistName };
        // Send a PUT request to update the playlist on the server
        fetch('http://localhost:3005/updatePlaylist', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPlaylist)
        })
            .then(response => response.json())
            .then(data => {
                navigate(`/playlist/${playlistID}`);
            })
            .catch(error => {
                console.error("Error updating playlist:", error);
            });
    }

    const discardChanges = () => {
        //discard changes made to the playlist
        setSongs(playlist.songs);
        navigate(`/playlist/${playlistID}`);
    }

    const removeSong = (index) => {
        // Remove a song from the playlist
        const newSongs = [...songs];
        newSongs.splice(index, 1);
        setSongs(newSongs);
    }

    return (
        <div>
            <div className="playlist_name">
                <p className="coverimage"><FaImage /></p>
                <form>
                    <input type='text' value={playlistName} onChange={e => setPlaylistName(e.target.value)}></input>
                </form>
                <FaPen />
                <div className="playlist_edit_btns">
                    <button className="cancel" onClick={discardChanges}>Discard</button>
                    <button className="safe" onClick={saveChanges}>Save changes</button>
                </div>
            </div>

            <div className="playlist_header">
                <p>Number</p>
                <p>Title of the song</p>
            </div>
            <div className="line"><hr /></div>
            <div className="songs">
            {songs.map((song, index) => (
                    <DeleteSong key={index} song={song} index={index} removeSong={removeSong}/>
                ))}
            </div>
        </div>
    );
};

export default EditingPlaylist;
