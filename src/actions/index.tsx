/* eslint-disable @typescript-eslint/no-explicit-any */
export type HomeActionsType = 'SET_FAVORITE' | 'DELETE_FAVORITE';
export type AppActionsType = HomeActionsType;
export function typedAction<T extends AppActionsType>(type: T): { type: T };
export function typedAction<T extends AppActionsType, P>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: AppActionsType, payload?: any) {
  return { type, payload };
}
