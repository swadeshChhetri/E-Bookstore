import React from 'react';
import SocialLogin from '../components/UI/SocialLogin'
import InputField from '../components/UI/InputField';
import { Link } from 'react-router-dom';

const Singup = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Sing Up</h2>
      <SocialLogin/>
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form">
      <InputField type="email" placeholder="Email address" icon="mail" />
      <InputField type="password" placeholder="Create Password" icon="lock" />
      <InputField type="password" placeholder="Confirm Password" icon="lock" />

      <span className="material-symbols-outlined"></span>
        <button className="login-button">Singup</button>
      </form>
      <p className="signup-text">Already have an account? <Link to="/E_BookStore/Login">Login</Link> </p>
    </div>
  )
}

export default Singup;