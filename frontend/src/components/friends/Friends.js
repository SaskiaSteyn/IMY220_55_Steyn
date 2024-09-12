import React from 'react'
import { FaUser } from "react-icons/fa6"
import { Link } from 'react-router-dom'


class SingleFriend extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className="friend_card">
                    <div className="friend_profile">
                        <FaUser />
                    </div>
                    <div className="friend_name">
                        <h4>Santa Clause</h4>
                    </div>
                    <div>
                        <Link to="/friendprofile"><button>Add friend</button></Link>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default SingleFriend