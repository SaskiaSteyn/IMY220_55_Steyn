import React from 'react'
import { FaUser } from "react-icons/fa6"
import { Link } from 'react-router-dom'


class ProfilePreview extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="user_preview">
                <h3>Hi, Alejandro</h3>
                <Link to="/profile" className="profile_image"><div ><FaUser /></div></Link>
            </div>
        );
    }

}

export default ProfilePreview