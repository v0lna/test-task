import { MEOW_FACTS_REQUEST, MEOW_FACTS_SUCCESS, MEOW_FACTS_ERROR } from '../storeConstants';

const initialState = {
  facts: '',
  loading: false,
  error: false,
};

const meowFactsReducer = (store = initialState, action) => {
  switch (action.type) {
    case MEOW_FACTS_REQUEST:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case MEOW_FACTS_SUCCESS:
      return {
        ...store,
        loading: false,
        facts: action.payload,
      };
    case MEOW_FACTS_ERROR:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    default:
      return store;
  }
};

export default meowFactsReducer;
