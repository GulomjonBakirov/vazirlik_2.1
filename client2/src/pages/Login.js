import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../store/actions/userActions";
import { message } from "antd";
import "antd/dist/antd.css";

import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { loading, isAuthanticated, error, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (isAuthanticated) {
      navigate("/profile");
    }
    if (error) {
      message.error("Parol yoki username hato");
      dispatch(clearErrors());
    }
  }, [navigate, isAuthanticated, dispatch, error]);
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>

                  <form onSubmit={submitHandler}>
                    <div className="form-floating mb-3">
                      <input
                        type="login"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                      <label for="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Kirish
                      </button>
                      <div className="text-center">
                        Akkountigiz bo'lmasa{" "}
                        <Link className="small" to="/registration">
                          Ro'yxatdan o'tish
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/restore">
                          Parolingizni unutdingizmi
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
