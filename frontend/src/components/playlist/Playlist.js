import React from 'react'
import { FaCirclePlus, FaPen, FaPlay, FaRepeat, FaShuffle } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import CommentList from '../comments/CommentList'
import SingleSong from '../song/Song'


class PlaylistFullView extends React.Component{
    
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <div>
                <h2>Playlist name</h2>
                <div className="playlist_icons">
                    <FaPlay />
                    <FaShuffle />
                    <FaRepeat />
                    <FaCirclePlus />
                    <Link to="/editplaylist"><FaPen /></Link>
                </div>
                <div className="playlist_header">
                    <p>Number</p>
                    <p>Title of the song</p>
                </div>
                <div className="line"><hr/></div>
                
                <div className="songs">
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                </div>
                <div>
                    <CommentList />
                </div>
                
            </div>
        );
    }

}

export default PlaylistFullView