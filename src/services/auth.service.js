// import axios from '../config/axios.config';
// import endpoints from '../services/endpoints.service';
import uuid from 'uuid/v4';
import { sampleUser } from '../constants/mock.data';

/* export const fetchAllUsers = () => {
  return axios
    .get(endpoints.allUsers())
    .then(res => {
      if (res && res.data) {
        return res.data;
      }
      return null;
    })
    .catch(err => {
      console.log(err);
    });
}; */

export const fakeLogin = async (username, password) => {
  const checkUser = (u, p) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sampleUser.username === u && sampleUser.password === p) {
          resolve({ success: true, token: uuid() });
        } else {
          reject({ success: false, message: 'invalid username or password' });
        }
      }, 3000);
    });
  };

  const result = await checkUser(username, password);
  return result;
};
