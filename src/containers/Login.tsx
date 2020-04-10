import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/containers/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <section className="login__container">
        <h2>Login</h2>
        <form className="login__container--form">
          <input type="text" className="input" placeholder="Email" />
          <input type="text" className="input" placeholder="Password" />
          <button type="button" className="button">
            Login
          </button>
          <div className="login__container--remember-me">
            <label htmlFor="cbox1">
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Remember me
            </label>
            <Link to="/">forgot password?</Link>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Login google" />
            Login with google
          </div>
          <div>
            <img src={twitterIcon} alt="Login Twitter" />
            Login with Twitter
          </div>
        </section>
        <p className="login__container--register">
          without an account?
          <Link to="/register">Register</Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
