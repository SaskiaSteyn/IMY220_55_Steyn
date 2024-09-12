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
                    <hr/>
                    <h3>10 Comments</h3>
                    <AddCommentGeneral />
                    <SingleComment />
                    <SingleComment />
                    <SingleComment />
                    <SingleComment />
                    <SingleComment />
                    <SingleComment />
                    <SingleComment />
                    <SingleComment />
                </div>
        );
    }

}

export default CommentList