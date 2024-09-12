import React from 'react'
import Navbar from '../components/Navbar'
import AddingFriends from '../components/friends/AddFriends'
import CurrentSong from '../components/home/CurrentSong'
import ProfilePreview from '../components/profile/ProfilePreview'

class AddFriend extends React.Component{
    render(){
        return(
            <div className="fullPage">
                <ProfilePreview />
                <div className="entry_content">
                    <div className="navBar">
                        <Navbar />
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