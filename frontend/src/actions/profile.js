import axios from "axios";
import { FETCH_PROFILE } from "./types";

// Fetch Profile
export const fetchProfile = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DEV_API_URL}/api/profile/`)
    .then(res => {
      dispatch({
        type: FETCH_PROFILE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
