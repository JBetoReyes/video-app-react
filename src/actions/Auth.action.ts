import { typedAction } from './index';
import { UserState } from '../typings/Containers/Auth.d';

export const onLogin = (payload: UserState) => {
  return typedAction('LOGIN', payload);
};

export const onLogout = (payload: UserState) => {
  return typedAction('LOGOUT', payload);
};

export const onRegister = (payload: UserState) => {
  return typedAction('REGISTER', payload);
};

export type AuthReduxAction = ReturnType<
  typeof onLogin | typeof onRegister | typeof onLogout
>;
