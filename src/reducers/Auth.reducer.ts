import { UserState } from '../typings/Containers/Auth.d';
import { AuthReduxAction } from '../actions/Auth.action';

const initial = {
  email: '',
  password: '',
  name: '',
};

export default (
  state: UserState = initial,
  action: AuthReduxAction
): UserState => {
  switch (action.type) {
    case 'LOGOUT':
    case 'REGISTER':
    case 'LOGIN': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
