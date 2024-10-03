import React from 'react'
import CurrentPlaylist from '../components/home/CurrentPlaylist'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistPreview from '../components/playlist/PlaylistPreview'
import ProfilePreview from '../components/profile/ProfilePreview'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.playlists = ["1", "2", "3", "4", "5"];
        this.state = {
            playlists: [],
            playlistPreviews : []
        }
        this.fetchPlaylists = this.fetchPlaylists.bind(this);
    }

    componentDidMount(){
        //fetch call 
        this.fetchPlaylists();
    }

    async fetchPlaylists(){
        try {
            const response = await fetch('http://localhost:3001/playlists', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                
              });

            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();

            console.log(json);
            // const playlistPreviewsTemp = this.playlistPreviewLoop(json);

            this.setState({
                playlists: json,
                playlistPreviews: []
            })
        } catch (error) {
            console.error(error.message);
        }
    }

    render(){
        return(
            <div className="fullPage">
                <div className="header">
                    <ProfilePreview />
                    <CurrentPlaylist />
                </div>
                
                <div className="entry_content">
                    <div className="navBar">
                        <Navbar playlists={this.state.playlists}/>
                    </div>
                    <div className="main_content">
                        <div className="main_heading">
                            <h2>Your recent listens</h2>
                        </div>
                        {this.state.playlists.length > 0 && 
                            <div className="playlist_list">
                                <PlaylistPreview playlistID = {this.state.playlists[0]._id} playlistName = {this.state.playlists[0].playlist_name}/>
                                <PlaylistPreview playlistID = {this.state.playlists[1]._id} playlistName = {this.state.playlists[1].playlist_name}/>
                            </div>
                        }
                        {this.state.playlists.length > 0 && 
                            <div className="playlist_list">
                                <PlaylistPreview playlistID = {this.state.playlists[2]._id} playlistName = {this.state.playlists[2].playlist_name}/>
                                <PlaylistPreview playlistID = {this.state.playlists[3]._id} playlistName = {this.state.playlists[3].playlist_name}/>
                            </div>
                        }
                        {/* <div className="playlist_list">
                            <PlaylistPreview playlistID = "1"/>
                            <PlaylistPreview playlistID = "2"/>
                        </div>
                        <div className="playlist_list">
                            <PlaylistPreview playlistID = "3"/>
                            <PlaylistPreview playlistID = "4"/>
                        </div> */}
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default Home