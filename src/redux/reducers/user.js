import { USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from '../storeConstants';

const initialState = {
  users: [],
  loading: false,
  error: false,
};

const usersReducer = (store = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case USERS_SUCCESS:
      return {
        ...store,
        loading: false,
        users: action.payload,
      };
    case USERS_ERROR:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    default:
      return store;
  }
};

export default usersReducer;
