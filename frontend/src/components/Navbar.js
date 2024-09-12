import React from 'react'
import Search from './Home/Search'
import NavPreview from './playlist/NavPreview'

import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/createplaylist">Create new</Link>
                <Search />
               <hr/>
            
                <h3>Your playlists</h3>
                <NavPreview />
                <NavPreview />
                <NavPreview />
                <NavPreview />
                <NavPreview />
            </nav>
        )
    }
}

export default Navbar