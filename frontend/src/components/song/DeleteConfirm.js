import React from 'react'

class DeleteConfirmation extends React.Component {
    render() {
        return (
            <div className="deleteConfirmation">
                <p>Are you sure you want to delete this song?</p>
                <div className="confirm_del_btns">
                    <button onClick={this.props.onConfirm}>Yes</button>
                    <button onClick={this.props.onCancel}>No</button>
                </div> 
            </div>
        );
    }
}

export default DeleteConfirmation;
