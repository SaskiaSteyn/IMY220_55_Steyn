import React from 'react'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistCreate from '../components/playlist/PlaylistCreate'
import ProfilePreview from '../components/profile/ProfilePreview'

class CreatePlaylist extends React.Component{
    
    constructor(props){
        super(props);
        this.playlists = ["1", "2", "3", "4", "5"];
    }

    render(){
        return(
            <div>
                <ProfilePreview />
                <div className="entry_content">
                    <div className="navBar">
                            <Navbar playlists={this.playlists}/>
                    </div>
                    <div className="main_content">
                        <PlaylistCreate />
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default CreatePlaylist;