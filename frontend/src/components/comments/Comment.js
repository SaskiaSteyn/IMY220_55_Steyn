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
                        <h4>Commenter's name</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
