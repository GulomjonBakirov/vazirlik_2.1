import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  UPDATE_USER_RESET,
  LOAD_USER_FAIL,
  RESTORE_PASSWORD_REQUEST,
  RESTORE_PASSWORD_FAIL,
  RESTORE_PASSWORD_SUCCESS,
  RESTORE_PASSWORD_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_USER_LESSON_SUCCESS,
  UPDATE_USER_LESSON_FAIL,
  UPDATE_USER_LESSON_RESET,
  UPDATE_USER_LESSON_REQUEST,
  UPDATE_USER_GRADE_SUCCESS,
  UPDATE_USER_GRADE_FAIL,
  UPDATE_USER_GRADE_RESET,
  UPDATE_USER_GRADE_REQUEST,
  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../constants/userConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_USER_REQUEST:
    case UPDATE_USER_REQUEST:
      return {
        loading: true,
        login: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthanticated: true,
        user: action.payload,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthanticated: action.payload["message"]
          ? !action.payload["success"]
            ? false
            : true
          : true,

        user: action.payload["message"]
          ? !action.payload["success"]
            ? null
            : action.payload
          : action.payload,
      };
    case REGISTER_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthanticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthanticated: false,
        user: null,
        error: action.payload,
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        isAuthanticated: false,

        user: 0,
        error: action.payload,
      };
    case REGISTER_USER_FAIL:
    case UPDATE_USER_FAIL:
      return {
        loading: false,
        login: false,
        user: 0,
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

export const userReducer = (state = { configData: {} }, action) => {
  switch (action.type) {
    case RESTORE_PASSWORD_REQUEST:
    case UPDATE_USER_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case RESTORE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isHad: true,
        configData: action.payload,
      };
    case UPDATE_USER_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true,
      };
    case RESTORE_PASSWORD_RESET:
      return {
        ...state,
        isHad: false,
      };
    case UPDATE_USER_RESET:
    case UPDATE_PASSWORD_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case UPDATE_USER_FAIL:
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESTORE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        configData: 0,
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

export const userLessonReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_LESSON_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case UPDATE_USER_LESSON_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true,
        lesson: action.payload,
      };

    case UPDATE_USER_LESSON_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case UPDATE_USER_LESSON_FAIL:
      return {
        ...state,
        loading: true,
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

export const userGradeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_GRADE_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case UPDATE_USER_GRADE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true,
        grade: action.payload,
      };
    case UPDATE_USER_GRADE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case UPDATE_USER_GRADE_FAIL:
      return {
        ...state,
        loading: true,
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
