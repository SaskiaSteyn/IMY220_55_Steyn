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
                            < SingleFriend  friendID={"7"}/>
                            < SingleFriend  friendID={"8"}/>
                            < SingleFriend  friendID={"9"}/>
                        </div>
                        <AddingFriends />
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendsPage