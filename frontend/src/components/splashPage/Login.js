import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isFormValid: false,
            usernameError: '',
            passwordError: ''
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    login(event) {
        event.preventDefault();
        if (this.state.isFormValid) {
            this.props.updateValue({
                username: this.state.username,
                password: this.state.password
            });
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value }, this.validateForm);
    }

    validateForm() {
        const { username, password } = this.state;
        const usernameValid = username.includes('@');
        const passwordValid = /^(?=.*[!@#$%^&*()_+{}:";'?/.,<>])[a-zA-Z0-9!@#$%^&*()_+{}:";'?/.,<>]{8,}$/.test(password);

        this.setState({
            isFormValid: usernameValid && passwordValid
        });
    }

    handleBlur(event) {
        const { name, value } = event.target;
        let error = '';
        if (name === 'username') {
            if (!value.includes('@')) {
                error = 'Username must contain an "@" symbol.';
            }
        } else if (name === 'password') {
            if (value.length < 8) {
                error = 'Password must be at least 8 characters long.';
            } else if (!/^(?=.*[!@#$%^&*()_+{}:";'?/.,<>])[a-zA-Z0-9!@#$%^&*()_+{}:";'?/.,<>]{8,}$/.test(value)) {
                error = 'Password must contain at least one special character.';
            }
        }

        this.setState({ [`${name}Error`]: error });
    }

    render() {
        const { username, password, isFormValid, usernameError, passwordError } = this.state;

        return (
            <div className="login_box">
                <h2>Login</h2>

                <form onSubmit={this.login}>
                    <label>Username </label><br />
                    <input 
                        type="text" 
                        className="username" 
                        placeholder="Enter your username" 
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        required
                    />
                    {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}<br /><br />

                    <label>Password</label><br />
                    <input 
                        type="password" 
                        className="password" 
                        placeholder="Enter your password" 
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        required
                    />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}<br /><br />

                    <Link to={isFormValid ? "/" : "#"}><button type="submit" disabled={!isFormValid}>
                        Login
                    </button></Link>
                    <div>
                        <p>Don’t have an account? | <Link to="/signup">Create an account</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
