import React from 'react'

class AddComment extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Add a comment</label><br/>
                    <textarea rows="4" cols="50"></textarea>
                    <div className="add_comment_btns">
                        <button type="button" onClick={this.props.onClose}>Discard</button>
                        <button type="button" onClick={this.props.onClose}>Send reply</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddComment;
