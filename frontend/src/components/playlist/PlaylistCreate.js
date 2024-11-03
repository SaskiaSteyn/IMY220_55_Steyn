import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaylistCreate = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [friends, setFriends] = useState('');
    const [image, setImage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'playlistName') {
            setPlaylistName(value);
        }
    };

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    //generate an API request to create a new playlist
    const createPlaylist = async () => {
        
        try {
            const response = await fetch('http://localhost:3005/createPlaylist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    playlistName: playlistName,
                }),
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                console.error('Failed to create playlist');
            }
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

    return (
        <div>
            <h2>Create a New Playlist</h2>

            <form className="create_new_playlist">
                <div className="create_playlist_component">
                    <label>Upload an Image:</label><br/>
                    <input 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                    />
                </div>

                <div className="create_playlist_component">
                    <label>Playlist Name:</label><br/>
                    <input 
                        type="text" 
                        name="playlistName" 
                        value={playlistName} 
                        onChange={handleInputChange} 
                    /><br/>
                </div>

                <div className="create_playlist_component">
                    <Link to="/addfriend"><button>Add friends</button></Link>
                </div>

                <div className="control_btns">
                    <button className="safe" type="button" onClick={createPlaylist}>Create Playlist</button>
                    <Link className="cancel" to="/"><button type="button">Cancel</button></Link>
                </div>
            </form>
        </div>
    );
};

export default PlaylistCreate;
