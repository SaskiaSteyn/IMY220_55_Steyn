import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            isFormValid: false,
            usernameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value }, this.validateForm);
    }

    validateForm() {
        const { username, email, password, confirmPassword } = this.state;

        const usernameValid = username.trim() !== ''; // Username should not be empty
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);  // Basic email regex validation
        const passwordValid = /^(?=.*[!@#$%^&*()_+{}:";'?/.,<>])[a-zA-Z0-9!@#$%^&*()_+{}:";'?/.,<>]{8,}$/.test(password);
        const passwordsMatch = password === confirmPassword;

        this.setState({
            isFormValid: usernameValid && emailValid && passwordValid && passwordsMatch
        });
    }

    handleBlur(event) {
        const { name, value } = event.target;
        let error = '';

        if (name === 'username') {
            if (value.trim() === '') {
                error = 'Username cannot be empty.';
            }
            this.setState({ usernameError: error });
        }

        if (name === 'email') {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if (!emailValid) {
                error = 'Please enter a valid email address.';
            }
            this.setState({ emailError: error });
        }

        if (name === 'password') {
            if (value.length < 8) {
                error = 'Password must be at least 8 characters long.';
            } else if (!/^(?=.*[!@#$%^&*()_+{}:";'?/.,<>])[a-zA-Z0-9!@#$%^&*()_+{}:";'?/.,<>]{8,}$/.test(value)) {
                error = 'Password must contain at least one special character.';
            }
            this.setState({ passwordError: error });
        }

        if (name === 'confirmPassword') {
            if (value !== this.state.password) {
                error = 'Passwords do not match.';
            }
            this.setState({ confirmPasswordError: error });
        }
    }

    signup(event) {
        event.preventDefault(); // Prevent default form submission

        // Check if the form is valid
        if (this.state.isFormValid) {
            // Do nothing here, we will let the form navigate using <Link>
        } else {
            // Trigger validation messages
            this.handleBlur({ target: { name: 'username', value: this.state.username } });
            this.handleBlur({ target: { name: 'email', value: this.state.email } });
            this.handleBlur({ target: { name: 'password', value: this.state.password } });
            this.handleBlur({ target: { name: 'confirmPassword', value: this.state.confirmPassword } });
        }
    }

    render() {
        const { username, email, password, confirmPassword, isFormValid, usernameError, emailError, passwordError, confirmPasswordError } = this.state;

        return (
            <div>
                <h2>Create your account</h2>

                <form onSubmit={this.signup}>
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

                    <label>Email </label><br />
                    <input
                        type="text"
                        className="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        required
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}<br /><br />

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

                    <label>Confirm Password</label><br />
                    <input
                        type="password"
                        className="password"
                        placeholder="Enter your password again"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        required
                    />
                    {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}<br /><br />

                    {isFormValid ? (
                        <Link to="/">
                            <button type="submit">
                                Create account
                            </button>
                        </Link>
                    ) : (
                        <button type="submit" disabled>
                            Create account
                        </button>
                    )}
                </form>
            </div>
        );
    }
}

export default Signup;
