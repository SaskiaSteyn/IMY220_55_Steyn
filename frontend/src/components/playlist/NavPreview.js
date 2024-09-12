import React from 'react'
import { FaImage } from "react-icons/fa6"
import { Link } from 'react-router-dom'

class NavPreview extends React.Component{
    
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <Link to="/playlist" className="nav_playlistPreview">
                    <p className="nav_coverimage"><FaImage /></p>
                    <div >
                        <h4><strong>Playlist name</strong></h4>
                        <div className="nav_playlistPreview_song_info">
                            <p>200 songs</p>
                            <p>•</p>
                            <p>10 hours</p>
                        </div>
                    </div>
                    
            </Link>
        );
    }

}

export default NavPreview