import React from 'react'
import { Link } from 'react-router-dom'

class PlaylistCreate extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            playlistName: '',
            friends: '',
            image: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleImageUpload(event) {
        this.setState({ image: event.target.files[0] });
    }

    render() {
        return (
            <div>
                <h2>Create a New Playlist</h2>
                
                <form className="create_new_playlist">
                    <div className="create_playlist_component">
                        <label>Upload an Image:</label><br/>
                        <input 
                            type="file" 
                            name="image" 
                            accept="image/*" 
                            onChange={this.handleImageUpload} 
                        />
                    </div>

                    <div className="create_playlist_component">
                        <label>Playlist Name:</label><br/>
                        <input 
                            type="text" 
                            name="playlistName" 
                            value={this.state.playlistName} 
                            onChange={this.handleInputChange} 
                        /><br/>
                    </div>

                    <div className="create_playlist_component">
                        <label>Add Friends:</label><br/>
                        <input 
                            type="text" 
                            name="friends" 
                            value={this.state.friends} 
                            placeholder="Type friend's name and press enter" 
                            onChange={this.handleInputChange} 
                        />
                    </div>

                    <div>
                        <Link to="/"><button type="button">Create Playlist</button></Link>
                        <Link to="/"><button type="button">Cancel</button></Link>
                    </div>
                </form>
            </div>
        );
    }

}

export default PlaylistCreate;
