import React from 'react'
import { FaUser } from "react-icons/fa6"


class SingleFriend extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                
                <div className="friend_card">
                    <div className="friend_profile">
                        <FaUser />
                    </div>
                    <div className="friend_name">
                        <h4>Santa Clause</h4>
                    </div>
                    <div>
                        <button>Add friend</button>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default SingleFriend