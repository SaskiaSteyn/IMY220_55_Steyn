import React from 'react'

import { Link } from 'react-router-dom'

class NavbarProfile extends React.Component{
    render(){
        return(
            <nav>
                <Link to="/">Home</Link>
                <hr/>
                <p>Settings</p>
                <p>Playlists</p>
                <p>Friends</p>
                <p>Logout</p>
            </nav>
        )
    }
}

export default NavbarProfile