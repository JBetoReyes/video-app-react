import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import '../assets/styles/containers/Register.scss';
import { connect } from 'react-redux';
import { UserState } from '../typings/Containers/Auth.d';
import { SetFormType } from './Login';
import { onRegister } from '../actions/Auth.action';

const mapDispatchToProps = {
  onRegister,
};

type DispatchProps = typeof mapDispatchToProps;

type OwnProps = {};

type Props = OwnProps & DispatchProps & RouteComponentProps;

const handleInput = (
  event: ChangeEvent<HTMLInputElement>,
  form: UserState,
  setForm: SetFormType
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
  props.onRegister(form);
  props.history.push('/');
};

const Register = (props: OwnProps) => {
  const [form, setForm] = useState<UserState>({
    name: '',
    email: '',
    password: '',
  });
  return (
    <section className="register">
      <section className="register__container">
        <h2>Register</h2>
        <form
          className="register__container--form"
          onSubmit={(e) => handleSubmit(form, e, props as Props)}
        >
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            onChange={(e) => handleInput(e, form, setForm)}
          />
          <input
            type="text"
            className="input"
            placeholder="Email"
            name="email"
            onChange={(e) => handleInput(e, form, setForm)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={(e) => handleInput(e, form, setForm)}
          />
          <button className="button" type="submit">
            Register
          </button>
        </form>
        <Link to="/login">Login</Link>
      </section>
    </section>
  );
};

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(Register);
