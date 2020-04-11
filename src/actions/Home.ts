import { typedAction } from './index';
import { CarouselItemState } from '../typings/Containers/Home';

export const setFavorite = (payload: CarouselItemState) => {
  return typedAction('SET_FAVORITE', payload);
};

export const deleteFavorite = (payload: number) => {
  return typedAction('DELETE_FAVORITE', payload);
};
