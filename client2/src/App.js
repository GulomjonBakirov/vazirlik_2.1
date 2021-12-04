import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Courses from "./pages/Courses";

import { loadUser } from "./store/actions/userActions";

import "./styles/style.css";
import "./styles/media.css";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";
import RestorePassword from "./pages/RestorePassword";
import UpdatePassword from "./pages/UpdatePassword";
import PrivateRoute from "./Router/PrivateRoute";
import TakeCertificate from "./pages/TakeCertificate";
import Unworked from "./pages/Unworked";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/restore" exact={true} element={<RestorePassword />} />
        <Route path="/unworked" exact={true} element={<Unworked />} />

        <Route
          path="/restore/updatePassword"
          exact={true}
          element={<UpdatePassword />}
        />

        <Route
          path="/myCourse/:category/takeCertificate"
          exact={true}
          element={
            <PrivateRoute>
              <TakeCertificate />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          exact={true}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/edit/:id"
          exact={true}
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/myCourses/:category"
          exact={true}
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        {/* <PrivateRoute  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
