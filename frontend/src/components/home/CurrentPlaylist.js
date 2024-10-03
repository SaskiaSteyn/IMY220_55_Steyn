import React from 'react'
import { FaImage } from "react-icons/fa6"
import { useParams } from 'react-router-dom'
import FriendPreview from '../friends/FriendPreview'


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <CurrentPlaylist {...props}  match = {match}/>
   }
 }

class CurrentPlaylist extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            playlistName: '',
            owner: '',
            songCount: 0,
            totalTime: ''
        };
    }

    componentDidMount(){
        //fetch call 
        let playlistID = this.props.match.params.playlistID;
        if(playlistID === undefined || playlistID === null){
            playlistID = "77f57d8834896282e8832001";
        }
        this.fetchPlaylist(playlistID);
    }

    async fetchPlaylist(playlistID){
        try {
            const response = await fetch('http://localhost:3001/playlist', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    id: playlistID
                }),
              });

            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();

            this.setState({
                playlistName: json.playlist_name,
                owner: '',
                songCount: json.songs.length,
                totalTime: json.duration
            })
        } catch (error) {
            console.error(error.message);
        }
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
                        <h3>{this.state.playlistName}</h3>
                        <p>Created by {this.state.owner}</p>
                        <div className="playlist_song_details">
                            <p>{this.state.songCount} songs</p>
                            <p>•</p>
                            <p>{this.state.totalTime}</p>
                        </div>
                        <div className="curr_playliist_friends">
                            <FriendPreview friendID="10"/>
                            <FriendPreview friendID="11"/>
                            <FriendPreview friendID="12"/>
                            <FriendPreview friendID="13"/>
                        </div>
                        {/* <div>
                            <p>Johan, Patterson, Rori and 1 other can edit this playlist</p>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(CurrentPlaylist);