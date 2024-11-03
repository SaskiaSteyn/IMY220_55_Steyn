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
        this.setState({ showConfirmation: false });
        this.props.removeSong(this.props.index);
    }
    
    render() {
        return (
            <div className="songDiv">
                <p>{this.props.index+1}.</p>
                <p className="coverimage_song"><FaImage /></p>
                <div className="songDetails">
                    <h4>{this.props.song.title}</h4>
                    <p>{this.props.song.artists[0]}</p>
                </div>
                
                <p>{this.props.song.duration}</p>
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

export default DeleteSong
