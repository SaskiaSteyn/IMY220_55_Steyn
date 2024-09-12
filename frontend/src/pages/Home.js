import React from 'react'
import CurrentPlaylist from '../components/home/CurrentPlaylist'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistPreview from '../components/playlist/PlaylistPreview'
import ProfilePreview from '../components/profile/ProfilePreview'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.playlists = ["1", "2", "3", "4", "5"];
    }

    render(){
        return(
            <div className="fullPage">
                <ProfilePreview />
                <CurrentPlaylist />
                <div className="entry_content">
                    <div className="navBar">
                        <Navbar playlists={this.playlists}/>
                    </div>
                    <div className="main_content">
                        <div className="playlist_list"><PlaylistPreview playlistID = "1"/><PlaylistPreview playlistID = "2"/></div>
                        <div className="playlist_list"><PlaylistPreview playlistID = "3"/><PlaylistPreview playlistID = "4"/></div>
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default Home