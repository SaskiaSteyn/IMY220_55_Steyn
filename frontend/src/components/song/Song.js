import React, { useState } from 'react';
import { FaCirclePlus, FaImage } from "react-icons/fa6";
import FriendPreview from '../friends/FriendPreview';
import AddSongToPlaylist from './AddSongToPlaylist';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../../store/slices/PlayListSlice';
import { FaPlay } from 'react-icons/fa';

const SingleSong = ({ index, song }) => {
    const userId = useSelector((state) => state.user.userId);
    const dispatch = useDispatch();

    const [hidden, setHidden] = useState(false);

    const addToPlaylist = () => {
        setHidden(prevHidden => !prevHidden);
    };

    const setCurrSong = () => {
        dispatch(setCurrentSong(song));
    }



    return (
        <div className="songDiv">
            <p>{index + 1}.</p>
            <p className="coverimage_song"><FaImage /></p>
            <div className="songDetails">
                <h4>{song.title}</h4>
                <p>{song.artists[0]}</p>
            </div>
            <p>{song.duration}</p>
            <div className="addToPlaylistBtn">
                {userId !== '' && <FaCirclePlus className="add_btn" onClick={addToPlaylist} />}
                {hidden && <AddSongToPlaylist song={song} hideOnClick={addToPlaylist} />}
            </div>
            <FriendPreview friendID="15" />
            <FriendPreview friendID="16" />
            <div style={{paddingLeft:'5%'}} onClick={setCurrSong}>
            <FaPlay />
            </div>
        </div>
    );
};

export default SingleSong;
