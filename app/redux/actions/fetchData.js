import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCHING_DATA,
  POST_DATA,
} from "../constants";

import { httpClient, data, options } from "../../config/config";

export function fetchDataApi() {
  return async (dispatch) => {
    dispatch(fetchingData());
    await httpClient
      .get("product_all/allData")
      .then(async function (res) {
        return await dispatch(fetchDataSuccess(res.data));
      })
      .catch((err) => dispatch(fetchDataFailure(err)));
  };
}

export function postDataApi() {
  return async (dispatch) => {
    dispatch(postData());
    await httpClient
      .post("product_all/allData", data, options)
      .then(async (res) => {
        return await dispatch(fetchDataSuccess(res.data));
        console.log("RESPONSE ==== : ", res);
        alert("send data is done");
      })
      .catch((err) => {
        dispatch(fetchDataFailure(err));
      });
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
function postData(data) {
  return {
    type: POST_DATA,
  };
}
