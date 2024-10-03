import React from 'react'
import { FaImage } from "react-icons/fa6"
import { Link } from 'react-router-dom'

class NavPreview extends React.Component{
    
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <Link to={"/playlist/" + this.props.playlistID} className="nav_playlistPreview">
                    <p className="nav_coverimage"><FaImage /></p>
                    <div >
                        <h4><strong>{this.props.playlistName}</strong></h4>
                        <div className="nav_playlistPreview_song_info">
                            <p>{this.props.songCount} songs</p>
                            <p>•</p>
                            <p>{this.props.duration} hours</p>
                        </div>
                    </div>
                    
            </Link>
        );
    }

}

export default NavPreview