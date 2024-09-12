import React from 'react'
import NavbarProfile from '../components/NavbarProfile'
import AddingFriends from '../components/friends/AddFriends'
import SingleFriend from '../components/friends/Friends'

class FriendsPage extends React.Component{
    render(){
        return(
            <div>
                <div className="entry_content">
                    <div className="navBar">
                        <NavbarProfile />
                    </div>
                    <div className="main_content">
                        <h2>Your list of friends</h2>
                        <div className="known_friends">
                            < SingleFriend />
                            < SingleFriend />
                            < SingleFriend />
                        </div>
                        <AddingFriends />
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendsPage