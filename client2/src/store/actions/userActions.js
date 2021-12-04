import axios from "axios";
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
  LOAD_USER_FAIL,
  RESTORE_PASSWORD_REQUEST,
  RESTORE_PASSWORD_SUCCESS,
  RESTORE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_LESSON_SUCCESS,
  UPDATE_USER_LESSON_FAIL,
  UPDATE_USER_LESSON_REQUEST,
  UPDATE_USER_GRADE_SUCCESS,
  UPDATE_USER_GRADE_FAIL,
  UPDATE_USER_GRADE_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import {
  registration,
  login as Login,
  logout as Logout,
  loadUser as LoadUser,
  updateUser as UpdateUser,
  restorePassword as RestorePassword,
  updatePassword as UpdatePassword,
  updateUserLesson as UpdateUserLesson,
  updateUserGrade as UpdateUserGrade,
} from "../constants/apiConstants";

//Login
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      Login,
      { username: username, password: password },
      config
    );
    localStorage.setItem("access_token", data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

//Register user
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(registration, userData, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("access_token"),
      },
    };
    const { data } = await axios.get(LoadUser, config);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error,
    });
  }
};

//User update
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(UpdateUser(id), userData, config);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error,
    });
  }
};

//Restore Password
export const restorePassword = (userEmail) => async (dispatch) => {
  try {
    dispatch({
      type: RESTORE_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      RestorePassword,
      { Resmail: userEmail },
      config
    );
    dispatch({
      type: RESTORE_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTORE_PASSWORD_FAIL,
      payload: error,
    });
  }
};

//Update Password
export const updatePassword = (id, username, password) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      UpdatePassword(id),
      { LgUpe: username, PassUpe: password },
      config
    );
    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error,
    });
  }
};

export const updateUserLesson = (id, userData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_LESSON_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      UpdateUserLesson(id),
      { Dars: userData },
      config
    );
    dispatch({
      type: UPDATE_USER_LESSON_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_LESSON_FAIL,
      payload: error,
    });
  }
};

export const updateUserGrade =
  (id, userData, lastUserData, category) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USER_GRADE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const userDataConfig =
        category === "word"
          ? { ball: userData, ball2: 0 }
          : { ball: lastUserData, ball2: userData };

      const { data } = await axios.post(
        UpdateUserGrade(id),
        userDataConfig,
        config
      );

      dispatch({
        type: UPDATE_USER_GRADE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_GRADE_FAIL,
        payload: error,
      });
    }
  };

export const logout = () => async (dispatch) => {
  try {
    await axios.get(Logout);
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem("access_token");
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
