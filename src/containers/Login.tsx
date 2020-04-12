/* eslint-disable react/jsx-curly-newline */
import React, {
  useState,
  SetStateAction,
  Dispatch,
  FormEvent,
  ChangeEvent,
} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserState } from '../typings/Containers/Auth.d';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { onLogin } from '../actions/Auth.action';
import '../assets/styles/containers/Login.scss';

export type SetFormType = Dispatch<SetStateAction<UserState>>;

const mapDispatchToProps = {
  onLogin,
};

type DispatchProps = typeof mapDispatchToProps;

type OwnProps = {};

type Props = DispatchProps & OwnProps & RouteComponentProps;

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
  props: Props
) => {
  event.preventDefault();
  props.onLogin(form);
  props.history.push('/');
};

const Login = (props: OwnProps) => {
  const [form, setForm] = useState<UserState>({
    email: '',
    password: '',
    name: 'mockName',
  });
  return (
    <div className="login">
      <section className="login__container">
        <h2>Login</h2>
        <form
          onSubmit={(e) => handleSubmit(form, e, props as Props)}
          className="login__container--form"
        >
          <input
            type="text"
            className="input"
            placeholder="Email"
            name="email"
            onChange={(e) => handleInput(form, setForm, e)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={(e) => handleInput(form, setForm, e)}
          />
          <button
            type="submit"
            className="button"
            onSubmit={(e) => handleSubmit(form, e, props as Props)}
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
