import React from 'react'
import { FaCirclePlus, FaImage, FaUser } from "react-icons/fa6"
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
                
                <div className="friend_icon"><FaUser /></div>
                <div className="friend_icon"><FaUser /></div>
            </div>
        );
    }

}

export default SingleSong