import React from 'react'
import Search from '../Home/Search'
import SingleFriend from './Friends'


class AddingFriends extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h2>Adding friends</h2>
                <Search />
                <div>
                    <h3>People you may know:</h3>
                    <div className="known_friends">
                        < SingleFriend />
                        < SingleFriend />
                        < SingleFriend />
                    </div>
                </div>
                <div>
                    <h3>You share the same music taste with these people:</h3>
                    <div className="known_friends">
                        < SingleFriend />
                        < SingleFriend />
                        < SingleFriend />
                    </div>
                </div>
            </div>
        );
    }

}

export default AddingFriends