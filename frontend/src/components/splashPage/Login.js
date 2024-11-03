import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setDisplayName, setEmail, setProfilePicture, setPronouns, setUserId, setUserName } from '../../store/slices/UserSlice'

const Login = ({ setLoginState }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState('');
    const [loginError, setLoginError] = React.useState(''); 
    const dispatch = useDispatch(); // Use dispatch to update the Redux store

    const navigate = useNavigate(); // Use navigate to redirect after login

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
            validateForm(value);
        }
        setLoginError(''); // Clear the login error on input change
    };

    const validateForm = (passwordValue) => {
        const passwordValid = /^(?=.*[!@#$%^&*()_+{}:";'?/.,<>])[a-zA-Z0-9!@#$%^&*()_+{}:";'?/.,<>]{8,}$/.test(passwordValue);
        setIsFormValid(passwordValid);
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        let error = '';
        if (name === 'password') {
            if (value.length < 8) {
                error = 'Password must be at least 8 characters long.';
            } else if (!/^(?=.*[!@#$%^&*()_+{}:";'?/.,<>])[a-zA-Z0-9!@#$%^&*()_+{}:";'?/.,<>]{8,}$/.test(value)) {
                error = 'Password must contain at least one special character.';
            }
        }
        setPasswordError(error);
    };

    const login = async (event) => {
        console.log("Login called");
        event.preventDefault();
        if (isFormValid) {
            console.log("Form valid");
            try {
                const response = await fetch('http://localhost:3005/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                });
                const data = await response.json();
                
                if (data.success) {
                    localStorage.setItem('userId', data.user._id);
                    dispatch(setUserId(data.user._id));
                    dispatch(setUserName(data.user.username));
                    dispatch(setDisplayName(data.user.displayname));
                    dispatch(setPronouns(data.user.pronouns));
                    dispatch(setEmail(data.user.email));
                    dispatch(setProfilePicture(data.user.profilePicture));
                    setLoginState(true); // Update the global login state
                    navigate('/', { state: { userId: data.user._id }}); // Redirect to home page
                } else {
                    // Set login error message
                    setLoginError(data.message || "Login failed. Please try again.");
                }
            } catch (error) {
                console.error("Error logging in:", error);
                setLoginError("An unexpected error occurred. Please try again later."); // Generic error message
            }
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={login}>
                <label>Username </label><br />
                <input 
                    type="text" 
                    className="username" 
                    placeholder="Enter your username" 
                    name="username"
                    value={username}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label>Password</label><br />
                <input 
                    type="password" 
                    className="password" 
                    placeholder="Enter your password" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {passwordError && <p style={{ color: 'white' }}>{passwordError}</p>}<br /><br />

                {/* Display the login error message if it exists */}
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}<br />

                <button type="submit" disabled={!isFormValid}>
                    Login
                </button>
                <div>
                    <p>Don’t have an account? | <Link to="/signup">Create an account</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
