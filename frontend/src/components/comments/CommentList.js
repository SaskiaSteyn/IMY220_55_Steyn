import React from 'react'
import AddCommentGeneral from './AddCommentGeneral'
import SingleComment from './Comment'

class CommentList extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <div className="comment_list">
                    <h3>{this.props.comments.length} Comment&#40;s&#41;</h3>
                    <AddCommentGeneral />
                    {this.props.comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment} />
                    ))}
                </div>
        );
    }

}

export default CommentList