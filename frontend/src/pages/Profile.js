import React from 'react'
import NavbarProfile from '../components/NavbarProfile'
import StaticProfile from '../components/profile/Profile'

class Profile extends React.Component{
    render(){
        return(
            <div>
                <div className="entry_content">
                    <div className="navBar">
                        <NavbarProfile />
                    </div>
                    <div className="main_content">
                        <StaticProfile />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile