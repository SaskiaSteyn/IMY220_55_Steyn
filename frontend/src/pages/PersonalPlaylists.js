import React from 'react'
import NavbarProfile from '../components/NavbarProfile'
import PlaylistPreview from '../components/playlist/PlaylistPreview';

class PersonalPlaylists extends React.Component{
    render(){
        return(
            <div>
                <div className="entry_content">
                    <div className="navBar">
                        <NavbarProfile />
                    </div>
                    <div className="main_content">
                        <h2>Your list of editable playlists</h2>
                        <PlaylistPreview />
                        <PlaylistPreview />
                        <PlaylistPreview />
                        <PlaylistPreview />
                        <PlaylistPreview />
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalPlaylists