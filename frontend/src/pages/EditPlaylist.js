import React from 'react'
import Navbar from '../components/Navbar'
import EditingPlaylist from '../components/playlist/EditPlaylist'
import ProfilePreview from '../components/profile/ProfilePreview'
import CurrentSong from '../components/home/CurrentSong'

class EditPlaylist extends React.Component{
    render(){
        return(
            <div className="fullPage">
                <ProfilePreview />
                <div className="entry_content">
                    <div className="navBar">
                            <Navbar />
                    </div>
                    <div className="main_content">
                        <EditingPlaylist />
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default EditPlaylist