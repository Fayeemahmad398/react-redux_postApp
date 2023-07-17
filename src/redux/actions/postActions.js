import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./actionsTypes";

import axios from "axios";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};
export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const postFetchData = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get("https://gauravgitacc.github.io/postAppData/posts.json")
      .then((response) => {
        console.log(response);
        dispatch(fetchPostSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchPostFailure(error.message));
      });
  };
};
