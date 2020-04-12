/* eslint-disable @typescript-eslint/no-explicit-any */
export type HomeActionType = 'SET_FAVORITE' | 'DELETE_FAVORITE';
export type AuthActionsType = 'LOGIN' | 'LOGOUT' | 'REGISTER';
export type AppActionType = HomeActionType | AuthActionsType;
export function typedAction<T extends AppActionType>(type: T): { type: T };
export function typedAction<T extends AppActionType, P>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: AppActionType, payload?: any) {
  return { type, payload };
}
