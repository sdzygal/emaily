import axios from 'axios';
import { FETCH_USER } from "./types";
import { FETCH_SURVEYS } from "./types";


//action creator
// export const fetchUser = () => {
//     return function (dispatch) {
//         axios
//             .get('/api/current_user') //sending to express back-end. After we got response from API - dispatch
//             .then(res => dispatch({ type: FETCH_USER, payload: res }));
//     };
// };


//refactor !!

export const fetchUser = () => async dispatch => {
      const res = await axios.get('/api/current_user')

             dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data.credits });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({type: FETCH_SURVEYS, payload: res.data});
};