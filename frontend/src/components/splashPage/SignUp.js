import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h2>Create your account</h2>

                    <form>
                        <label>Username </label><br/>
                        <input type="text" className="username" placeholder="Enter your username" required/><br/><br/>

                        <label>Email </label><br/>
                        <input type="text" className="email" placeholder="Enter your email" required/><br/><br/>

                        <label>Password</label><br/>
                        <input type="password" className="password" placeholder="Enter your password" required/><br/><br/>
                        <input type="password" className="password" placeholder="Enter your password again" required/><br/><br/>

                        <button type="submit"><Link to="/">Create account</Link></button>
                    </form>
            </div>
        );
    }

}

export default Signup