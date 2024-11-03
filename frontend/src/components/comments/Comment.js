import React from 'react'
import { FaReply, FaThumbsDown, FaThumbsUp, FaUser } from "react-icons/fa6"
import AddComment from './AddComment'

class SingleComment extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { addComment: false };
        this.addComment = this.addComment.bind(this);
        this.closeAddComment = this.closeAddComment.bind(this);  
    }

    addComment() {
        this.setState({ addComment: !this.state.addComment });
    }

    closeAddComment() {
        this.setState({ addComment: false });
    }
    
    render() {
        return (
            <div className="single_comment">
                <div className="comment">
                    <div className="comment_icon">
                        <div className="commentor_icon"><FaUser /></div>
                    </div>
                    
                    <div className="comment_txt">
                        <h4>{this.props.comment.commenter_name}</h4>
                        <p>{this.props.comment.comment_text}</p>
                        <div className="comment_btns">
                            <FaThumbsUp />
                            <FaThumbsDown />
                            <FaReply onClick={this.addComment} />
                        </div>
                    </div>
                </div>
                        {this.state.addComment && (
                            <div className="add_comment_wrapper">
                                <AddComment onClose={this.closeAddComment} />
                            </div>
                        )}
            </div>
        );
    }

}

export default SingleComment;
