import React from 'react';
import Login from '../components/splashPage/Login';

class LoginPage extends React.Component {
    // Assuming setLoginState is defined in the parent component (e.g., App.js)
    render() {
        const { setLoginState } = this.props; // Get setLoginState from props

        return (
            <div className="login_page">
                <div className="login_box">
                    <Login setLoginState={setLoginState} /> {/* Pass it down to Login */}
                </div>
            </div>
        );
    }
}

export default LoginPage;
