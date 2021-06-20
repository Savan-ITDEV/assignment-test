import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCHING_DATA,
  POST_DATA,
} from "../constants";

const initialState = {
  data: [],
  isFetching: false,
  error: false,
};

export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case POST_DATA:
      return {
        ...state,
        isFetching: false,

      };
    default:
      return state;
  }
}
