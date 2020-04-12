/* eslint-disable react/jsx-curly-newline */
import React, {
  useState,
  SetStateAction,
  Dispatch,
  FormEvent,
  ChangeEvent,
} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserState } from '../typings/Containers/Auth.d';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { onLogin } from '../actions/Auth.action';
import '../assets/styles/containers/Login.scss';

type SetFormType = Dispatch<SetStateAction<UserState>>;

const mapDispatchToProps = {
  onLogin,
};

type DispatchProps = typeof mapDispatchToProps;

const handleInput = (
  form: UserState,
  setForm: SetFormType,
  event: ChangeEvent<HTMLInputElement>
) => {
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  });
};

const handleSubmit = (
  form: UserState,
  event: FormEvent<HTMLButtonElement | HTMLFormElement>,
  props: DispatchProps
) => {
  event.preventDefault();
  props.onLogin(form);
};

const Login = (props: {}) => {
  const [form, setForm] = useState<UserState>({
    email: '',
    password: '',
  });
  return (
    <div className="login">
      <section className="login__container">
        <h2>Login</h2>
        <form
          onSubmit={(event) =>
            handleSubmit(form, event, props as DispatchProps)
          }
          className="login__container--form"
        >
          <input
            type="text"
            className="input"
            placeholder="Email"
            name="email"
            onChange={(event) => handleInput(form, setForm, event)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={(event) => handleInput(form, setForm, event)}
          />
          <button
            type="submit"
            className="button"
            onSubmit={(event) =>
              handleSubmit(form, event, props as DispatchProps)
            }
          >
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

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(Login);
