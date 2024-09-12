import React from 'react'


class AddSongToPlaylist extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="addToPlaylist">
                <h3>Select a playlist</h3>
                <br/>
                <p>Playlist 1</p>
                <p>Playlist 2</p>
                <p>Playlist 3</p>
                <p>Playlist 4</p>
            </div>
        );
    }

}

export default AddSongToPlaylist