import React from 'react';
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StaticProfile = () => {

    const { userId,
        userName,
        displayName,
        pronouns,
        email,
        profilePicture } = useSelector((state) => state.user);

    return (
        <div>
            <h2>Profile Page</h2>
            <FaUser />
            <p><strong>Username</strong> {userName}</p>
            <p><strong>Display Name</strong> {displayName}</p>
            <p><strong>Pronouns</strong> {pronouns}</p>
            <p><strong>Email</strong> {email}</p>

            <button className="safe"><Link to="/editprofile">Edit profile</Link></button>
        </div>
    );
};

export default StaticProfile;
