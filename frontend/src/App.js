import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddFriend from './pages/AddFriend'
import AddSong from './pages/AddSong'
import CreatePlaylist from './pages/CreatePlaylist'
import EditPlaylist from './pages/EditPlaylist'
import EditingProfile from './pages/EditProfile'
import FriendProfile from './pages/FriendProfile'
import Friends from './pages/Friends'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import PersonalPlaylists from './pages/PersonalPlaylists'
import Playlist from './pages/Playlist'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import store from './store/Store'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false, // State to track login status
        };
    }

    // Function to update login state
    setLoginState = (state) => {
        this.setState({ isLoggedIn: state });
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage setLoginState={this.setLoginState} />} /> {/* Pass setLoginState here */}
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/editprofile" element={<EditingProfile />} />
                        {/* Playlist needs routing */}
                        <Route path="/playlist" element={<Playlist />} />
                        <Route path="/playlist/:playlistID" element={<Playlist />} />
                        <Route path="/editplaylist/:playlistID" element={<EditPlaylist />} />
                        <Route path="/createplaylist" element={<CreatePlaylist />} />
                        <Route path="/addsong" element={<AddSong />} />
                        <Route path="/addfriend" element={<AddFriend />} />
                        <Route path="/friends" element={<Friends />} />
                        {/* Profile needs routing */}
                        <Route path="/friendprofile" element={<FriendProfile />} />
                        <Route path="/friendprofile/:friendID" element={<FriendProfile />} />
                        <Route path="/personalplaylists" element={<PersonalPlaylists />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
