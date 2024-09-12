import React from 'react'
import { FaImage, FaPen } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import DeleteSong from '../song/DeleteSong'


class EditingPlaylist extends React.Component{
    
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <div>
                <div className="playlist_name">
                    <p className="coverimage"><FaImage /></p>
                    <h2>Playlist name </h2>
                    <FaPen />
                    <div className="playlist_edit_btns">
                        <Link to="/playlist"><button>Discard</button></Link>
                        <Link to="/playlist"><button>Save changes</button></Link>
                    </div>
                </div>
                
                <div className="playlist_header">
                    <p>Number</p>
                    <p>Title of the song</p>
                </div>
                <div className="line"><hr/></div>
                <div className="songs">
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                    <DeleteSong />
                </div>
                
                    
            </div>
        );
    }

}

export default EditingPlaylist