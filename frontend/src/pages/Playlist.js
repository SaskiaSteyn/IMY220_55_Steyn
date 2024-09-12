import React from 'react'
import CurrentPlaylist from '../components/home/CurrentPlaylist'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistFullView from '../components/playlist/Playlist'
import ProfilePreview from '../components/profile/ProfilePreview'

class Playlist extends React.Component{
    render(){
        return(
            <div className="fullPage">
                <ProfilePreview />
                <div className="entry_content">
                    <div className="navBar">
                            <Navbar />
                    </div>
                    <div className="main_content">
                        <CurrentPlaylist />
                        <br/>
                        <PlaylistFullView />
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default Playlist