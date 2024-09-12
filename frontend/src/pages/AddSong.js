import React from 'react'
import Navbar from '../components/Navbar'
import CurrentSong from '../components/home/CurrentSong'
import ProfilePreview from '../components/profile/ProfilePreview'
import SongList from '../components/song/SongList'

class AddSong extends React.Component{

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
                        <SongList />
                    </div>
                </div>
                <CurrentSong /> 
            </div>
        );
    }
}

export default AddSong