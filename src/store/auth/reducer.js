import { ActionTypes } from './action';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  userDetails: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userDetails: action.payload.data,
        error: null
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default authReducer;
