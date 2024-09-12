import React from 'react'

import { Link } from 'react-router-dom'

class NavbarProfile extends React.Component{
    render(){
        return(
            <nav>
                <Link to="/">Home</Link>
                <hr/>
                <Link to="/profile">Profile Settings</Link>
                <Link to="/personalplaylists">Playlists</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/login">Logout</Link>
            </nav>
        )
    }
}

export default NavbarProfile