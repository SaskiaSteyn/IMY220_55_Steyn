import React from 'react'
import Search from './Home/Search'
import NavPreview from './playlist/NavPreview'

import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/createplaylist">Create new</Link>
                <Search />
               <hr/>
            
                <h3>Your playlists</h3>
                {this.props.playlists.map((playlist, index) => {
                    return(
                        <NavPreview playlistID = {playlist}/>
                    );
                })}
            </nav>
        )
    }
}

export default Navbar