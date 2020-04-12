import { typedAction } from './index';
import { CarouselItemState } from '../typings/Containers/Home.d';

export const setFavorite = (payload: CarouselItemState) => {
  return typedAction('SET_FAVORITE', payload);
};

export const deleteFavorite = (payload: number) => {
  return typedAction('DELETE_FAVORITE', payload);
};

export const filterItems = (payload: string) => {
  return typedAction('FILTER', payload);
};

export type HomeReduxAction = ReturnType<
  typeof setFavorite | typeof deleteFavorite | typeof filterItems
>;
