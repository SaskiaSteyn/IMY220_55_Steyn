import React from 'react'
import Navbar from '../components/Navbar'
import EditingPlaylist from '../components/playlist/EditPlaylist'
import ProfilePreview from '../components/profile/ProfilePreview'
import CurrentSong from '../components/home/CurrentSong'

class EditPlaylist extends React.Component{

    constructor(props){
        super(props);
        this.playlists = ["1", "2", "3", "4", "5"];
    }

    render(){
        return(
            <div className="fullPage">
                <ProfilePreview />
                <div className="entry_content">
                    <div className="navBar">
                            <Navbar playlists={this.playlists}/>
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