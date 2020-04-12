import { typedAction } from './index';
import { UserState } from '../typings/Containers/Auth.d';

export const onLogin = (payload: UserState) => {
  return typedAction('LOGIN', payload);
};

export type AuthReduxAction = ReturnType<typeof onLogin>;
