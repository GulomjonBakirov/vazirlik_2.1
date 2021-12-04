import {
  VIDEO_SUCCESS,
  VIDEO_FAIL,
  VIDEO_REQUEST,
  CLEAR_ERRORS,
} from "../constants/videoConstants";

export const allVideosReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: action.payload,
      };
    case VIDEO_FAIL:
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
