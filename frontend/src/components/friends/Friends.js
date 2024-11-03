import React from 'react';
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SingleFriend = ({ friend }) => {
    return (
        <div>
            <div className="friend_card">
                <div className="friend_profile">
                    <FaUser />
                </div>
                <div className="friend_name">
                    <h4>{friend.displayname}</h4>
                </div>
                <div>
                    <Link to={`/friendprofile/${friend._id}`}>
                        <button>View profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFriend;
