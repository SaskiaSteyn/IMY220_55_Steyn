import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setDisplayName, setEmail, setProfilePicture, setPronouns, setUserName } from '../store/slices/UserSlice'

const NavbarProfile = () => {
    const userName = useSelector((state) => state.user.displayName);
    const dispatch = useDispatch();
    const logout = () => {
        // Clear the user state
        localStorage.clear();
        dispatch(setUserName(""));
        dispatch(setDisplayName(""));
        dispatch(setPronouns(""));
        dispatch(setEmail(""));
        dispatch(setProfilePicture(""));
    }
    return (
        <nav className="settings_nav">
            <Link to="/">Home</Link>
            <hr />
            <Link to="/profile">Profile Settings</Link>
            <Link to="/personalplaylists">Playlists</Link>
            <Link to="/friends">Friends</Link>
            { userName === "" && 
                        <div className="nav_item">
                            <Link to="/login">Login</Link>
                        </div>
            } 
            { userName !== "" && 
                <div className="nav_item" onClick={logout}>
                    <Link to="/">Logout</Link>
                </div>
            }         
        </nav>
    );
};

export default NavbarProfile;
