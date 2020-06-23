import { REGISTER, LOGIN, GET_USER } from "../constant/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  login: [],
  register: [],
  loading: false,
  error: null,
};

const REGISTER_PENDING = `${REGISTER}_${ActionType.Pending}`;
const REGISTER_FULFILLED = `${REGISTER}_${ActionType.Fulfilled}`;
const REGISTER_REJECTED = `${REGISTER}_${ActionType.Rejected}`;

const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

const GET_USER_PENDING = `${GET_USER}_${ActionType.Pending}`;
const GET_USER_FULFILLED = `${GET_USER}_${ActionType.Fulfilled}`;
const GET_USER_REJECTED = `${GET_USER}_${ActionType.Rejected}`;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_FULFILLED:
    case REGISTER_FULFILLED:
    case LOGIN_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USER_REJECTED:
    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;