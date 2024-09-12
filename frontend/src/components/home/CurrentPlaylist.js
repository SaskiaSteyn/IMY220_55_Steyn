import React from 'react'
import { FaImage } from "react-icons/fa6"
import FriendPreview from '../friends/FriendPreview'

class CurrentPlaylist extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="current_playlist">
                <h2>Currently playing</h2>
                <div className="curr_playlist_wrapper">
                    <div className="curr_playlist_cover">
                        <FaImage />
                    </div>
                    <div className="playlist_details">
                        <h3>Playlist name</h3>
                        <p>Created by user</p>
                        <div className="playlist_song_details">
                            <p>200 songs</p>
                            <p>•</p>
                            <p>10 hours</p>
                        </div>
                        <div className="curr_playliist_friends">
                            <FriendPreview />
                            <FriendPreview />
                            <FriendPreview />
                            <FriendPreview />
                        </div>
                        <div>
                            <p>Johan, Patterson, Rori and 1 other can edit this playlist</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CurrentPlaylist