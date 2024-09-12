import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddSong from './pages/AddSong'
import CreatePlaylist from './pages/CreatePlaylist'
import EditPlaylist from './pages/EditPlaylist'
import { default as EditingProfile } from './pages/EditProfile'
import Home from './pages/Home'
import Login from './pages/Login'
import Playlist from './pages/Playlist'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import AddFriend from './pages/AddFriend'

class App extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/editprofile" element={<EditingProfile />} />
                        <Route path="/playlist" element={<Playlist />} />
                        <Route path="/editplaylist" element={<EditPlaylist />} />
                        <Route path="/createplaylist" element={<CreatePlaylist />} />
                        <Route path="/addsong" element={<AddSong />} />
                        <Route path="/addfriend" element={<AddFriend />} />
                    </Routes>
            </BrowserRouter>
        );
    }
}

export default App