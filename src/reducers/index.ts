/* eslint-disable @typescript-eslint/no-explicit-any */
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: (state.mylist as any[]).filter(
          ({ id }) => id !== (action.payload as number)
        ),
      };
    default:
      return state;
  }
};

export default reducer;
