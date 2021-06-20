import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCHING_DATA,
} from "../constants";
import axios from "axios";

export function fetchDataApi() {
  return async (dispatch) => {
    dispatch(fetchingData());
    await axios
      .get(
        "https://60cdbb8991cc8e00178dbd7d.mockapi.io/api/product_all/allData"
      )
      .then(async function (response) {
        return await dispatch(fetchDataSuccess(response.data));
      })
      .catch((err) => dispatch(fetchDataFailure(err)));
  };
}
function fetchingData() {
  return {
    type: FETCHING_DATA,
  };
}

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  };
}

function fetchDataFailure() {
  return {
    type: FETCH_DATA_FAILURE,
  };
}
