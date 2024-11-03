import React, { useEffect } from 'react';
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const EditProfile = () => {

    //get the user info from the redux userslice
    const { userId,
        userName,
        displayName,
        pronouns,
        email,
        profilePicture } = useSelector((state) => state.user);
    //make corresponding hooks for the above variables
    const [userNameForm, setUserName] = useState(userName);
    const [displayNameForm, setDisplayName] = useState(displayName);
    const [pronounsForm, setPronouns] = useState(pronouns);
    const [emailForm, setEmail] = useState(email);
    const [profilePictureForm, setProfilePicture] = useState(profilePicture);

    // useEffect(() => {
    //     setUserName(userName);
    //     setDisplayName(displayName);
    //     setPronouns(pronouns);
    //     setEmail(email);
    // }, []);


    const editProfile = (event) => {
        event.preventDefault();
        updateProfile();
    };

    // Make an API call to update the user profile
    const updateProfile = async () => {
        try {
            const response = await fetch('http://localhost:3005/updateProfile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    userName: userNameForm,
                    displayName: displayNameForm,
                    pronouns: pronounsForm,
                    email: emailForm,
                    profilePicture: profilePictureForm
                }),
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    return (
        <div className="editing_own_profile">
            <h2>Profile Page</h2>

            <form onSubmit={editProfile}>
                <FaUser /><br/>
                <label><strong>Username</strong></label>
                <input value={userNameForm} onChange={e => setUserName(e.target.value)}/><br/><br/>

                <label><strong>Display Name</strong></label>
                <input value={displayNameForm} onChange={e => setDisplayName(e.target.value)}/><br/><br/>

                <label><strong>Pronouns</strong></label>
                <input value={pronounsForm} onChange={e => setPronouns(e.target.value)}/><br/><br/>

                <label><strong>Email</strong></label>
                <input value={emailForm} onChange={e => setEmail(e.target.value)} /><br/><br/>

                <button className="cancel" type="button"><Link to="/profile">Cancel</Link></button>
                <button className="safe" type="submit">Save changes</button>
            </form>
        </div>
    );
};

export default EditProfile;
