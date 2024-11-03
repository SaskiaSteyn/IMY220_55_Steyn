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
                    <textarea className="comment_gen" rows="4" cols="100"></textarea>
                    <div className="add_comment_btns">
                        <button className="safe" onClick={this.addComment}>Send reply</button>
                        <button className="cancel" onClick={this.addComment}>Discard</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddCommentGeneral;
