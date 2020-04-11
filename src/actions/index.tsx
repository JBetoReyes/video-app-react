/* eslint-disable @typescript-eslint/no-explicit-any */
export type carouselItemActionType = 'SET_FAVORITE' | 'DELETE_FAVORITE';

export const setFavorite = (payload: any) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload: number) => ({
  type: 'DELETE_FAVORITE',
  payload,
});
