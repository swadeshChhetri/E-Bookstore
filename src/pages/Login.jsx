import React from 'react';
import '../styles/Login.css';
import SocialLogin from '../components/UI/SocialLogin';
import InputField from '../components/UI/InputField';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in</h2>
      <SocialLogin/>
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form">
      <InputField type="email" placeholder="Email address" icon="mail" />
      <InputField type="password" placeholder="Password" icon="lock" />

      <span class="material-symbols-outlined"></span>
        <a href="#" className="forgot-pass-link">Forgot Password?</a>

        <button className="login-button">Log In</button>
      </form>
      <p className="signup-text">Don&apos;t have an account? <Link to="/E_BookStore/Singup">Singup</Link></p>
    </div>
  )
}

export default Login;