import axios from "axios";
import {
  ALL_TESTS_SUCCESS,
  ALL_TESTS_FAIL,
  ALL_TESTS_REQUEST,
  CLEAR_ERRORS,
} from "../constants/testConstants";
import { getTests } from "../constants/apiConstants";

export const getAllTests = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_TESTS_REQUEST,
    });

    const { data } = await axios.get(getTests);

    dispatch({
      type: ALL_TESTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TESTS_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
