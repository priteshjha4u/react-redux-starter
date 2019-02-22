import { fakeLogin } from '../../services/auth.service';

const Prefix = '[auth]';

export const ActionTypes = {
  LOGIN_START: `${Prefix} login start`,
  LOGIN_SUCCESS: `${Prefix} login success`,
  LOGIN_FAIL: `${Prefix} login fail`,
  LOGOUT: `${Prefix} logout`
};

export const userLogin = (username, password, history) => async dispatch => {
  dispatch(loginStart());
  const response = await fakeLogin(username, password);
  if (response.success) {
    dispatch(loginSuccess({ username, token: response.token }));
    history.push('/home');
  } else {
    dispatch(loginFail(response));
  }
};

const loginStart = () => ({
  type: ActionTypes.LOGIN_START
});

const loginSuccess = response => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: { data: response }
});

const loginFail = error => ({
  type: ActionTypes.LOGIN_FAIL,
  payload: { error }
});

export const logout = () => ({
  type: ActionTypes.LOGOUT
});
