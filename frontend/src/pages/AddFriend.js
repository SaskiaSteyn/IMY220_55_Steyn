import React from 'react'
import Navbar from '../components/Navbar'
import AddingFriends from '../components/friends/AddFriends'
import CurrentSong from '../components/home/CurrentSong'
import ProfilePreview from '../components/profile/ProfilePreview'

class AddFriend extends React.Component{

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
                        <AddingFriends />
                    </div>
                </div>
                <CurrentSong /> 
            </div>
        );
    }
}

export default AddFriend