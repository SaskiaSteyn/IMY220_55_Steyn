import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavbarProfile from '../components/NavbarProfile'
import PlaylistPreview from '../components/playlist/PlaylistPreview'

const PersonalPlaylists = () => {
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists.playlists);
    return (
        <div>
            <div className="entry_content">
                <div className="navBar">
                    <NavbarProfile />
                </div>
                <div className="main_content">
                    <h2>Your list of editable playlists</h2>
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
    );
};

export default PersonalPlaylists;