import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Home/Search'
import SingleSong from './Song'


class SongList extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className="add_song_edit">
                    <h2>Add a song</h2>
                    <div className="playlist_edit_btns">
                        <Link to="/playlist"><button>Discard</button></Link>
                        <Link to="/playlist"><button>Save changes</button></Link>
                    </div>
                </div>
                <Search />
                <div>
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
                    <SingleSong />
                    <SingleSong />
                    <SingleSong />
                </div>
            </div>
        );
    }

}

export default SongList