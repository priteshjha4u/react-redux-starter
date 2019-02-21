import axios from '../config/axios.config';
import endpoints from '../services/endpoints.service';

export const fetchAllUsers = () => {
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
};
