import { fakeLogin } from '../../services/auth.service';

const Prefix = '[auth]';

export const ActionTypes = {
  LOGIN_START: `${Prefix} login start`,
  LOGIN_SUCCESS: `${Prefix} login success`,
  LOGIN_FAIL: `${Prefix} login fail`,
  LOGOUT: `${Prefix} logout`
};

export const userLogin = (username, password) => async dispatch => {
  const response = await fakeLogin(username, password);
  if (response.success) {
    dispatch(loginSuccess({ username, token: response.token }));
  } else {
    dispatch(loginFail(response));
  }
};

const loginSuccess = response => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: { data: response }
});

const loginFail = error => ({
  type: ActionTypes.LOGIN_FAIL,
  payload: { error }
});
