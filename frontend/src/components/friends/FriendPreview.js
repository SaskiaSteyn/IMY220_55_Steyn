import React from 'react'
import { FaUser } from "react-icons/fa6"
import { Link } from 'react-router-dom'


class FriendPreview extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className="friend_image">
                    <Link to={"/friendprofile/" + this.props.friendID}><FaUser /></Link>
                </div>
            </div>
        );
    }

}

export default FriendPreview