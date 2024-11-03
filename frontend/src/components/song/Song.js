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
                <p>{this.props.index+1}.</p>
                <p className="coverimage_song"><FaImage /></p>
                <div className="songDetails">
                    <h4>{this.props.song.title}</h4>
                    <p>{this.props.song.artists[0]}</p>
                </div>
                
                <p>{this.props.song.duration}</p>
                <div className="addToPlaylistBtn">
                    <FaCirclePlus className="add_btn" onClick={this.addToPlaylist}/>
                    {this.state.hidden && <AddSongToPlaylist song={this.props.song}/>}
                </div>
                
                <FriendPreview friendID="15"/>
                <FriendPreview friendID="16"/>
            </div>
        );
    }

}

export default SingleSong