import React from 'react'
import { FaImage, FaTrashCan, FaUser } from "react-icons/fa6"
import DeleteConfirmation from './DeleteConfirm'

class DeleteSong extends React.Component {
    
    constructor(props) {
        super(props);
        this.toggleDeleteConfirmation = this.toggleDeleteConfirmation.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
        this.state = { showConfirmation: false };
    }

    toggleDeleteConfirmation() {
        this.setState({ showConfirmation: !this.state.showConfirmation });
    }

    deleteSong() {
        // Logic to delete the song goes here
        console.log("Song deleted");
        this.setState({ showConfirmation: false });
    }
    
    render() {
        return (
            <div className="songDiv">
                <p>1.</p>
                <p className="coverimage_song"><FaImage /></p>
                <div className="songDetails">
                    <h4>Song Title</h4>
                    <p>Artist Name</p>
                </div>
                
                <p>3:45</p>
                <div className="deleteSongBtn">
                    <FaTrashCan className="delete_btn" onClick={this.toggleDeleteConfirmation}/>
                    {this.state.showConfirmation && (
                    <DeleteConfirmation className="del_btn"
                        onConfirm={this.deleteSong} 
                        onCancel={this.toggleDeleteConfirmation}
                    />
                    )} 
                </div>
                
                <div className="friend_icon"><FaUser /></div>
                <div className="friend_icon"><FaUser /></div>
               
            </div>
        );
    }
}

export default DeleteSong;
