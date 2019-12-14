import { USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from '../storeConstants';
import url from '../../config';

export default function getUsers() {
  return async (dispatch) => {
    try {
      dispatch({ type: USERS_REQUEST });

      const resJson = await fetch(url);
      if (!resJson.ok) {
        return dispatch({ type: USERS_ERROR, payload: resJson });
      }
      const res = await resJson.json();
      dispatch({ type: USERS_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: USERS_ERROR, payload: error });
    }
  };
}
