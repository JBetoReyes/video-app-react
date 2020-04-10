import React from 'react';
import '../assets/styles/containers/Register.scss';

const Register = () => {
  return (
    <section className="register">
      <section className="register__container">
        <h2>Register</h2>
        <form className="register__container--form">
          <input type="text" className="input" placeholder="Name" />
          <input type="text" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <button className="button" type="button">
            Register
          </button>
        </form>
        <a href="/login">Login</a>
      </section>
    </section>
  );
};

export default Register;
