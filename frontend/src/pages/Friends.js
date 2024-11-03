import React from 'react';
import NavbarProfile from '../components/NavbarProfile';
import AddingFriends from '../components/friends/AddFriends';
import SingleFriend from '../components/friends/Friends';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendsPage = () => {

    //select friends from redux state
    const friends = useSelector((state) => state.user.friends);
    const userId = useSelector((state) => state.user.userId);

    //hook for friends
    const [friendsList, setFriendsList] = useState([]);

    //effect to get friends
    useEffect(() => {
        getFriends();
    }, []);
    
    //api call to get friends
    const getFriends = async () => {
        try {
            const response = await fetch('http://localhost:3005/friends', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    friends: friends
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setFriendsList(data.users);
            } else {
                console.error('Failed to get friends');
            }
        } catch (error) {
            console.error('Error getting friends:', error);
        }
    };


    return (
        <div>
            <div className="entry_content">
                <div className="navBar">
                    <NavbarProfile />
                </div>
                <div className="main_content">
                    <h2>Your list of friends</h2>
                    <div className="known_friends">
                        {friendsList.length > 0 && friendsList.map((friend) => {
                            return (
                                <SingleFriend key={friend.id} friend={friend} />
                            );
                        })}
                        {friendsList.length === 0 && <div><br/><p>You have no friends yet</p><br/></div>}
                    </div>
                    <br/>
                    <AddingFriends friends={friends} />
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
