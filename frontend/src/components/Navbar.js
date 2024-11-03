import React from 'react'
import { FaCirclePlus, FaHouse, FaLock } from "react-icons/fa6"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setDisplayName, setEmail, setProfilePicture, setPronouns, setUserName } from '../store/slices/UserSlice'
import Search from './home/Search'
import NavPreview from './playlist/NavPreview'

const Navbar = ({ playlists }) => {
    const userName = useSelector((state) => state.user.displayName);
    const dispatch = useDispatch();
    const logout = () => {
        // Clear the user state
        dispatch(setUserName(""));
        dispatch(setDisplayName(""));
        dispatch(setPronouns(""));
        dispatch(setEmail(""));
        dispatch(setProfilePicture(""));
    }
    return (
        <nav>
            <div className="top_nav">
                <div className="nav_links">
                    <div className="nav_item">
                        <Link to="/"><FaHouse /></Link>
                        <Link to="/">Home</Link>
                    </div>
                    { userName === "" && 
                        <div className="nav_item">
                            <Link to="/login"><FaLock /></Link>
                            <Link to="/login">Login</Link>
                        </div>
                    } 
                    { userName !== "" && 
                        <div className="nav_item" onClick={logout}>
                            <Link to="/"><FaLock /></Link>
                            <Link to="/">Logout</Link>
                        </div>
                    }                   
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

            {playlists.map((playlist) => (
                <NavPreview
                    key={playlist._id}
                    playlistID={playlist._id}
                    playlistName={playlist.playlist_name}
                    songCount={playlist.songs.length}
                    duration={playlist.duration}
                />
            ))}
        </nav>
    );
};

export default Navbar;
