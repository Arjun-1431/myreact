import { useState } from 'react';
import axios from 'axios';
import "./CssFiles/Login.css";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom"

export default function LoginSignup() {
    const  navigate = useNavigate();
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', { name, email, password });
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "User registered successfully"
            });
        } catch (error) {
            console.error('Error registering user:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
        }
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { name, password });
            // Assuming successful login, you might want to store user data or token in state or local storage
            Swal.fire({
                title: 'Success!',
                text: 'Login successful',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            navigate('/home')
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Login failed',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className='bodymaindiv'>
            <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignUpSubmit}>
                        <h5>Create Account</h5>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSignInSubmit}>
                        <h5>Sign in</h5>
                        <span>or use your account</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Email" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start the journey with us</p>
                            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
