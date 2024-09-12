import React from 'react'

class AddCommentGeneral extends React.Component {
    
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
    }

    addComment(event){
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Add a comment</label><br/>
                    <textarea rows="4" cols="86"></textarea>
                    <div className="add_comment_btns">
                        <button onClick={this.addComment}>Discard</button>
                        <button onClick={this.addComment}>Send reply</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddCommentGeneral;
