import React from 'react'
import { FaUser } from "react-icons/fa6"
import { Link } from 'react-router-dom'

class EditProfile extends React.Component{
    
    constructor(props){
        super(props);
        this.editProfile = this.editProfile.bind(this);
    }

    editProfile(event){
        event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <h2>Profile Page</h2>

                <form onSubmit={this.editProfile}>
                    <FaUser /><br/>
                    <label><strong>Username</strong></label>
                    <input defaultValue="AlejandroG" /><br/><br/>

                    <label><strong>Display Name</strong></label>
                    <input defaultValue="Alejandro García"/><br/><br/>

                    <label><strong>Pronouns</strong></label>
                    <input defaultValue="He/him"/><br/><br/>

                    <label><strong>Email</strong></label>
                    <input defaultValue="AlejandroG@email.com" /><br/><br/>

                    <button><Link to="/profile">Cancel</Link></button>
                    <button><Link to="/profile">Save changes</Link></button>
                </form>

                
            </div>
        );
    }

}

export default EditProfile