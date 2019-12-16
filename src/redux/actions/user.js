import { USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from '../storeConstants';
import { userUrl } from '../../config';

export default function getUsers() {
  return async (dispatch) => {
    try {
      dispatch({ type: USERS_REQUEST });

      const resJson = await fetch(userUrl);
      let res = null;
      if (!resJson.ok) {
        dispatch({ type: USERS_ERROR, payload: resJson });
      } else {
        res = await resJson.json();
        dispatch({ type: USERS_SUCCESS, payload: res });
      }
    } catch (error) {
      dispatch({ type: USERS_ERROR, payload: error });
    }
  };
}
