import { ActionTypes } from './action';

const initialState = {
  selectedMenu: ''
};

const uiStateReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.SET_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload.data
      };
    default:
      return state;
  }
};

export default uiStateReducer;
