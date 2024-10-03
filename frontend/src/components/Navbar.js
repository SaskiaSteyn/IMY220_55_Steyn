import React from 'react'
import { FaCirclePlus, FaHouse, FaLock } from "react-icons/fa6"
import Search from './home/Search'
import NavPreview from './playlist/NavPreview'


import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
                <div className="top_nav">
                   <div className="nav_links">
                    <div className="nav_item">
                        <Link to="/"><FaHouse /></Link>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/login"><FaLock /></Link>
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/createplaylist"><FaCirclePlus /></Link>
                        <Link to="/createplaylist">Create new</Link>
                    </div>
                    </div>
                
                    <Search /> 
                </div>
            
                <div className="nav_heading">
                    <h3>Your playlists</h3>
                </div>
                
                {this.props.playlists.map((playlist, index) => {
                    return(
                        <NavPreview playlistID = {playlist._id} playlistName = {playlist.playlist_name} songCount = {playlist.songs.length} duration = {playlist.duration}/>
                    );
                })}
            </nav>
        )
    }
}

export default Navbar