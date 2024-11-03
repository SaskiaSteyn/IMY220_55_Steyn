import React, { useEffect } from 'react';
import { FaUser } from "react-icons/fa6";
import PlaylistPreview from '../playlist/PlaylistPreview';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const FriendProfileView = () => {

    // get friendId from the URL
    const { friendID } = useParams();

    const userId = useSelector((state) => state.user.userId);

    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetchFriendData();
    }, [friendID]);

    // fetch friend data based on friendID
    const fetchFriendData = async () => {
        try {
            const response = await fetch('http://localhost:3005/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: friendID })
            });
            const friendData = await response.json();
            setFriend(friendData.user);
        } catch (error) {
            console.error("Error fetching friend data:", error);
        }
    };

    //call api to add as friend
    const addFriend = async () => {
        try {
            const response = await fetch('http://localhost:3005/addFriend', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    friendId: friendID
                }),
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                console.error('Failed to add friend');
            }
        } catch (error) {
            console.error('Error adding friend:', error);
        }
    };

    return (
        <div>
            <h2>Profile Page</h2>
            <FaUser />
            <p><strong>Username</strong> {friend.username}</p>
            <p><strong>Display Name</strong> {friend.displayname}</p>
            <p><strong>Pronouns</strong> {friend.pronouns}</p>
            {/* <p>You have <strong>2</strong> playlists in common</p>
            <div className="playlists_in_common">
                <PlaylistPreview playlistID="15" />
                <PlaylistPreview playlistID="16" />   
            </div> */}
            <button className="safe" onClick={addFriend}>Add as friend</button>
        </div>
    );
};

export default FriendProfileView;
