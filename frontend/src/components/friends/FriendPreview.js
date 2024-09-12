import React from 'react'
import { FaUser } from "react-icons/fa6"


class FriendPreview extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className="friend_image">
                    <FaUser />
                </div>
            </div>
        );
    }

}

export default FriendPreview