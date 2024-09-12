import React from 'react'
import NavbarProfile from '../components/NavbarProfile';
import EditProfile from '../components/profile/EditProfile'

class EditingPlaylist extends React.Component{
    render(){
        return(
            <div>
                <div className="entry_content">
                    <div className="navBar">
                        <NavbarProfile />
                    </div>
                    <div className="main_content">
                        <EditProfile />
                    </div>
                </div>
            </div>
                
        );
    }
}

export default EditingPlaylist