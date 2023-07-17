const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const postReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.type);
  if (action.type === "FETCH_POST_REQUEST") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "FETCH_POST_SUCCESS") {
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_POST_FAILURE") {
    return {
      ...state,
      loading: false,
      data: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};
export default postReducer;
