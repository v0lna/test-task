import { MEOW_FACTS_REQUEST, MEOW_FACTS_SUCCESS, MEOW_FACTS_ERROR } from '../storeConstants';
import { meowFactsUrl } from '../../config';

export default function getFacts() {
  return async (dispatch) => {
    try {
      dispatch({ type: MEOW_FACTS_REQUEST });

      const resJson = await fetch(meowFactsUrl);
      let res = null;
      if (!resJson.ok) {
        dispatch({ type: MEOW_FACTS_ERROR, payload: resJson });
      } else {
        res = await resJson.json();
        const [meowString] = res.data;
        dispatch({ type: MEOW_FACTS_SUCCESS, payload: meowString });
      }
    } catch (error) {
      dispatch({ type: MEOW_FACTS_ERROR, payload: error });
    }
  };
}
