import React from 'react'
import { FaImage, FaPlay } from "react-icons/fa6"
import { Link } from 'react-router-dom'

class PlaylistPreview extends React.Component{
    
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <Link to="/playlist" className="playlistPreview">
                    <p className="coverimage"><FaImage /></p>
                    <p><strong>Playlist name</strong></p>
                    <FaPlay />
            </Link>
        );
    }

}

export default PlaylistPreview