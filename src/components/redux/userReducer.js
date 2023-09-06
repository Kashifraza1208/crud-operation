import {
  CREATE_USER,
  DELETE_USER,
  GET_SINGLE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./actionType";



const initialState = {
  users: [],
  user: {},
  loading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    case CREATE_USER:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case DELETE_USER:
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
