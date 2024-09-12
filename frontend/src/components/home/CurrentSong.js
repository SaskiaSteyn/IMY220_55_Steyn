import React from 'react'
import { FaBackward, FaCirclePlus, FaForward, FaHeart, FaImage, FaPlay, FaShare } from "react-icons/fa6"

class CurrentSong extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="current_song">
                <div className="song_art_and_info">
                    <p className="coverimage_song"><FaImage /></p>
                    <div className="song_info">
                    <h4><strong>Current song name</strong></h4>
                    <div className="song_and_playlist_info">
                        <p>Artist name</p>
                        <p>•</p>
                        <p>Playlist name</p>
                    </div>
                </div>
                </div>
                
                <div className="audio_controls">
                    <div className="play_skip_rewind"> 
                        <FaBackward />
                        <FaPlay />
                        <FaForward />
                    </div>
                    <div className="progress_bar">
                        <hr/>
                    </div>
                </div>
                <div className="other_controls">
                    <FaHeart />
                    <FaCirclePlus />
                    <FaShare />
                </div>

            </div>
        );
    }

}

export default CurrentSong