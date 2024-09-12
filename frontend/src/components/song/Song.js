import React from 'react'
import { FaCirclePlus, FaImage } from "react-icons/fa6"
import FriendPreview from '../friends/FriendPreview'
import AddSongToPlaylist from './AddSongToPlaylist'


class SingleSong extends React.Component{
    
    constructor(props){
        super(props);
        this.addToPlaylist = this.addToPlaylist.bind(this);
        this.state = { hidden: false }
    }

    addToPlaylist(){
        this.setState({hidden : !this.state.hidden});
    }
    
    render(){
        return(
            <div className="songDiv">
                <p>1.</p>
                <p className="coverimage_song"><FaImage /></p>
                <div className="songDetails">
                    <h4>Song Title</h4>
                    <p>Artist Name</p>
                </div>
                
                <p>3:45</p>
                <div className="addToPlaylistBtn">
                    <FaCirclePlus className="add_btn" onClick={this.addToPlaylist}/>
                    {this.state.hidden && <AddSongToPlaylist />}
                </div>
                
                <FriendPreview friendID="15"/>
                <FriendPreview friendID="16"/>
            </div>
        );
    }

}

export default SingleSong