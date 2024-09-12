import React from 'react'
import CurrentPlaylist from '../components/home/CurrentPlaylist'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistPreview from '../components/playlist/PlaylistPreview'
import ProfilePreview from '../components/profile/ProfilePreview'

class Home extends React.Component{
    render(){
        return(
            <div className="fullPage">
                <ProfilePreview />
                <CurrentPlaylist />
                <div className="entry_content">
                    <div className="navBar">
                        <Navbar />
                    </div>
                    <div className="main_content">
                        <div className="playlist_list"><PlaylistPreview /><PlaylistPreview /></div>
                        <div className="playlist_list"><PlaylistPreview /><PlaylistPreview /></div>
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default Home