import React from 'react'
import { FaUser } from "react-icons/fa6"
import { Link } from 'react-router-dom'
// import profileImage from '../../../public/assets/ImageProfile.png';

class StaticProfile extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h2>Profile Page</h2>
                <FaUser />
                <p><strong>Username</strong> @AlejandroG</p>
                <p><strong>Display Name</strong> Alejandro García</p>
                <p><strong>Pronouns</strong> He/him</p>
                <p><strong>Email</strong> AlejandroG@email.com</p>

                <button><Link to="/editprofile">Edit profile</Link></button>
            </div>
        );
    }

}

export default StaticProfile