import React from 'react'
import Navbar from '../components/Navbar'
import PlaylistFullView from '../components/playlist/Playlist'
import ProfilePreview from '../components/profile/ProfilePreview'
import CurrentSong from '../components/home/CurrentSong'

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
                        <h2>Currently playing</h2>
                        {/* Todo: need a component for curr playing */}
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