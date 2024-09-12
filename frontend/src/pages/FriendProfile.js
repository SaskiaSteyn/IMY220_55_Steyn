import React from 'react'
import NavbarProfile from '../components/NavbarProfile'
import FriendProfileView from '../components/friends/FriendProfile';

class FriendProfile extends React.Component{
    render(){
        return(
            <div>
                <div className="entry_content">
                    <div className="navBar">
                        <NavbarProfile />
                    </div>
                    <div className="main_content">
                        <FriendProfileView />
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendProfile