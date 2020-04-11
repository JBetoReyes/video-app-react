/* eslint-disable @typescript-eslint/no-explicit-any */
import { setFavoriteType } from '../actions';

const reducer = (state: any, action: any) => {
  if (action.type === setFavoriteType) {
    return {
      ...state,
      mylist: [...state.mylist, action.payload],
    };
  }
  return state;
};

export default reducer;
