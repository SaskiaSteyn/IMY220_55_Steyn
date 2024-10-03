import React from 'react'
import Login from '../components/splashPage/Login'

class LoginPage extends React.Component{
    render(){
        return(
            <div className="login_page">
                <div className="login_box">
                    <Login />
                </div>
               
            </div>
        );
    }
}

export default LoginPage