import React, { useEffect, useState } from 'react'
import { FaCirclePlus, FaPen, FaPlay, FaRepeat, FaShuffle } from "react-icons/fa6"
import { Link, useParams } from 'react-router-dom'
import CommentList from '../comments/CommentList'
import SingleSong from '../song/Song'

const PlaylistFullView = () => {
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
            {playlist && <h2>{playlist.playlist_name}</h2>}
            <div className="playlist_icons">
                <FaPlay />
                <FaShuffle />
                <FaRepeat />
                <Link to="/addsong"><FaCirclePlus /></Link>
                <Link to={`/editplaylist/${playlistID}`}><FaPen /></Link>
            </div>
            <div className="playlist_header">
                <p>Number</p>
                <p>Title of the song</p>
            </div>
            <div className="line"><hr /></div>
            
            <div className="songs">
                {songs.map((song, index) => (
                    <SingleSong key={index} song={song} index={index} />
                ))}
            </div>
            {playlist && playlist.comments &&
            <div>
                <CommentList comments={playlist.comments}/>
            </div>
            }
        </div>
    );
};

export default PlaylistFullView;
