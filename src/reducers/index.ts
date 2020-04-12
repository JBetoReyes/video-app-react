import { combineReducers } from 'redux';
import homeReducer from './Home.reducer';
import authReducer from './Auth.reducer';
import { HomeState } from '../typings/Containers/Home.d';
import { UserState } from '../typings/Containers/Auth.d';
import { HomeReduxAction } from '../actions/Home.action';
import { AuthReduxAction } from '../actions/Auth.action';

export interface AppState {
  home: HomeState;
  user: UserState;
}

type AppReduxAction = HomeReduxAction & AuthReduxAction;

export default combineReducers<AppState, AppReduxAction>({
  home: homeReducer,
  user: authReducer,
});
