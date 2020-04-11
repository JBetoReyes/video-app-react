/* eslint-disable @typescript-eslint/no-explicit-any */
export const setFavoriteType = 'SET_FAVORITE';

export const setFavorite = (payload: any) => ({
  type: setFavoriteType,
  payload,
});
