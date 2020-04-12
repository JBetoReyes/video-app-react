import { UserState } from '../typings/Containers/Auth.d';
import { AuthReduxAction } from '../actions/Auth.action';

const initial = {
  email: '',
  password: '',
};

export default (
  state: UserState = initial,
  action: AuthReduxAction
): UserState => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
