import { HomeState } from '../typings/Containers/Home.d';
import { HomeReduxAction } from '../actions/Home.action';

const initial = {
  mylist: [],
  originals: [],
  trends: [],
};

export default (
  state: HomeState = initial,
  action: HomeReduxAction
): HomeState => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const carouselItem = state.mylist.find(
        ({ id }) => id === action.payload.id
      );
      if (carouselItem) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
