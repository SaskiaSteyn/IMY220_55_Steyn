import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="login_box">
                <h2>Login</h2>

                    <form>
                        <label>Username </label><br/>
                        <input type="text" className="username" placeholder="Enter your username" required/><br/><br/>

                        <label>Password</label><br/>
                        <input type="password" className="password" placeholder="Enter your password" required/><br/><br/>

                        <button type="submit"><Link to="/">Login</Link></button>
                        <div>
                            <p>Don’t have an account? | <Link to="/signup">Create an account</Link></p>
                        </div>
                    </form>
            </div>
        );
    }

}

export default Login