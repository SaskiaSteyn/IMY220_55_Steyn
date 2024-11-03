import React, { useEffect } from 'react';
import Search from '../home/Search';
import SingleFriend from './Friends';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AddingFriends = ({friends}) => {

    //hook for potential friends
    const [potentialFriends, setPotentialFriends] = useState([]);

    const userId = useSelector((state) => state.user.userId);

    useEffect(() => {
        if(userId !== '' && userId !== undefined){
            getPotentialFriends();
        }
    }, [userId]);

    //call api to get users that are not user or friends
    const getPotentialFriends = async () => {
        try {
            const response = await fetch('http://localhost:3005/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    users: [userId, ...friends]
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setPotentialFriends(data.users);
            } else {
                console.error('Failed to get potential friends');
            }
        } catch (error) {
            console.error('Error getting potential friends:', error);
        }
    };

    return (
        <div>
            <h2>Adding friends</h2>
            <Search />
            <div>
                <h3>People you may know:</h3>
                <div className="known_friends">
                    {potentialFriends.map((friend) => {
                        return (
                            <SingleFriend key={friend._id} friend={friend} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AddingFriends;
