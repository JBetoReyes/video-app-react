import { combineReducers } from 'redux';
import homeReducer from './Home.reducer';
import { HomeState } from '../typings/Containers/Home.d';
import { HomeReduxAction } from '../actions/Home.action';

export interface AppState {
  home: HomeState;
}

type AppReduxAction = HomeReduxAction;

export default combineReducers<AppState, AppReduxAction>({ home: homeReducer });
