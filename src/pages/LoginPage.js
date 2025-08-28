import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/dashboard');
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
          setError('Invalid email or password. Please try again.');
        } else {
          setError('Failed to log in. Please try again later.');
        }
        console.error("Login error:", err);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name
        }).then(() => {
          setSuccess('Account created successfully! Please log in.');
          setIsLogin(true);
        });
      })
      .catch((err) => {
        if (err.code === 'auth/weak-password') {
          setError('Password should be at least 6 characters long.');
        } else if (err.code === 'auth/email-already-in-use') {
          setError('This email is already registered. Please log in.');
        } else {
          setError('Failed to sign up. Please try again later.');
        }
        console.error("Sign up error:", err);
      });
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div className="welcome-text">
          <h1>Welcome to Disaster Alert Hub!</h1>
          <p>Stay informed, stay safe — Login or Sign Up to access real-time alerts and the dashboard.</p>
        </div>

        <div className="login-container">
          {isLogin ? (
            <>
              <h2>Login</h2>
              {success && <p className="success-message">{success}</p>}
              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <label htmlFor="login-email">Email</label>
                  <input type="email" id="login-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                  <label htmlFor="login-password">Password</label>
                  <input type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-btn">Login</button>
              </form>
              <p className="toggle-text">
                Don't have an account? <span onClick={toggleForm}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <form onSubmit={handleSignUp}>
                <div className="input-group">
                  <label htmlFor="signup-name">Full Name</label>
                  <input type="text" id="signup-name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                  <label htmlFor="signup-email">Email</label>
                  <input type="email" id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                  <label htmlFor="signup-password">Password</label>
                  <input type="password" id="signup-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="signup-btn">Sign Up</button>
              </form>
              <p className="toggle-text">
                Already have an account? <span onClick={toggleForm}>Login</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;