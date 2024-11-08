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
                    <textarea rows="4" cols="88"></textarea>
                    <div className="add_comment_btns">
                        <button className="safe" type="button" onClick={this.props.onClose}>Send reply</button>
                        <button className="cancel" type="button" onClick={this.props.onClose}>Discard</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddComment;
