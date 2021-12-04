import axios from "axios";
import {
  VIDEO_SUCCESS,
  VIDEO_FAIL,
  VIDEO_REQUEST,
  CLEAR_ERRORS,
} from "../constants/videoConstants";
import { getVideos } from "../constants/apiConstants";

export const getAllVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: VIDEO_REQUEST,
    });

    const { data } = await axios.get(getVideos);

    dispatch({
      type: VIDEO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VIDEO_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
