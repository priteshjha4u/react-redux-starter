import { ActionTypes } from './action';

const initialState = {
  currentPath: '/'
};

const uiStateReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.SET_SELECTED_MENU:
      return {
        ...state,
        currentPath: action.payload.data
      };
    default:
      return state;
  }
};

export default uiStateReducer;
