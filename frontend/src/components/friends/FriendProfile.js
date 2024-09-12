import React from 'react'
import { FaUser } from "react-icons/fa6"
import PlaylistPreview from '../playlist/PlaylistPreview'

class FriendProfileView extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h2>Profile Page</h2>
                <FaUser />
                <p><strong>Username</strong> @DaddyClause</p>
                <p><strong>Display Name</strong> Santa Clause</p>
                <p><strong>Pronouns</strong> He/him</p>
                <p>You have <strong>2</strong> playlists in common</p>
                <div className="playlists_in_common">
                    <PlaylistPreview />
                    <PlaylistPreview />   
                </div>
                
            </div>
        );
    }

}

export default FriendProfileView