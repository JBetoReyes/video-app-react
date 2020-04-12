import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import { AppState } from '../reducers';
import { onLogout } from '../actions/Auth.action';
import { UserState } from '../typings/Containers/Auth.d';

const mapDispatchToProps = {
  onLogout,
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

type DispatchPropsType = typeof mapDispatchToProps;
type StateToPropsType = ReturnType<typeof mapStateToProps>;
type OwnProps = {};
type Props = OwnProps & RouteComponentProps & DispatchPropsType;

const handleLogout = (props: Props) => {
  props.onLogout({
    email: '',
    name: '',
    password: '',
  });
  props.history.push('/login');
};

const Header = (props: OwnProps) => {
  const { user } = props as AppState;
  const hasUser = (Object.keys(user) as Array<keyof UserState>).every(
    (key) => user[key] !== ''
  );
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {!hasUser ? (
            <img src={userIcon} alt="user-icon" />
          ) : (
            <img
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000"
              alt="user-icon"
            />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <a href="/">{user.name}</a>
            </li>
          )}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={() => handleLogout(props as Props)}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default withRouter(
  connect<StateToPropsType, DispatchPropsType, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
