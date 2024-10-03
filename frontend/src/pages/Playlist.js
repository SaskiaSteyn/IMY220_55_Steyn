import React from 'react'
import CurrentPlaylist from '../components/home/CurrentPlaylist'
import CurrentSong from '../components/home/CurrentSong'
import Navbar from '../components/Navbar'
import PlaylistFullView from '../components/playlist/Playlist'
import ProfilePreview from '../components/profile/ProfilePreview'

class Playlist extends React.Component{

    constructor(props){
        super(props);
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
                <ProfilePreview />
                <div className="entry_content">
                    <div className="navBar">
                            <Navbar playlists={this.state.playlists}/>
                    </div>
                    <div className="main_content">
                        <CurrentPlaylist />
                        <br/>
                        <PlaylistFullView />
                    </div>
                </div>
                <CurrentSong />
            </div>
        );
    }
}

export default Playlist