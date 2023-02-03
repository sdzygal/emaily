import axios from 'axios';
import { FETCH_USER } from "./types";


//action creator
// export const fetchUser = () => {
//     return function (dispatch) {
//         axios
//             .get('/api/current_user') //sending to express back-end. After we got response from API - dispatch
//             .then(res => dispatch({ type: FETCH_USER, payload: res }));
//     };
// };


//refactor

export const fetchUser = () => async dispatch => {
      const res = await axios .get('/api/current_user')

             dispatch({ type: FETCH_USER, payload: res.data });
};