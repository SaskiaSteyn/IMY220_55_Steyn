import React from 'react'
import { FaUser } from "react-icons/fa6"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfilePreview = () => {
    const userName = useSelector((state) => state.user.displayName);

    return (
        <div className="user_preview">
            {userName !== "" && <Link to="/profile"> <h3>Hi, {userName}</h3> </Link>}
            {userName === "" && <Link to="/login"> <h3>Sign in</h3> </Link>}
            {userName !== "" && <Link to="/profile" className="profile_image">
                <div><FaUser /></div>
            </Link>}
            {userName === "" && <Link to="/login" className="profile_image">
                <div><FaUser /></div>
                </Link>}
        </div>
    );
};

export default ProfilePreview;
