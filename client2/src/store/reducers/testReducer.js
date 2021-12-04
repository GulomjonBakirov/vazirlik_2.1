import {
  ALL_TESTS_REQUEST,
  ALL_TESTS_SUCCESS,
  ALL_TESTS_FAIL,
  CLEAR_ERRORS,
} from "../constants/testConstants";

export const allTestsReducer = (state = { tests: [] }, action) => {
  switch (action.type) {
    case ALL_TESTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_TESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };
    case ALL_TESTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
