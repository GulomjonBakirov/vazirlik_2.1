import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  authReducer,
  userReducer,
  userLessonReducer,
  userGradeReducer,
} from "./reducers/userReducer";
import { allVideosReducer } from "./reducers/videoReducer";
import { allTestsReducer } from "./reducers/testReducer";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  videos: allVideosReducer,
  tests: allTestsReducer,
  lessons: userLessonReducer,
  grade: userGradeReducer,
});

const middleware = [thunk];
let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
