import { ActionTypes } from './action';

const initialState = {
  isLoading: false,
  error: null,
  allUsers: null
};

const uiStateReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.FETCH_ALL_USERS:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allUsers: action.payload.data
      };
    case ActionTypes.FETCH_ALL_USERS:
      return {
        ...state,
        isLoading: false,
        allUsers: null,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default uiStateReducer;
