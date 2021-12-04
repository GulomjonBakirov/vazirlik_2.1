import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearErrors } from "../store/actions/userActions";
import { message } from "antd";

export default function RestorePassword() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading, configData, isUpdated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      message.success("Next Etap");
      navigate("/login");
      dispatch(clearErrors());
    }
  }, [dispatch, error, isUpdated, message, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(configData && configData._id, userName, password));
  };
  return (
    <div>
      <div className="wrapper">
        <Header restore={true} />
        <Menu />
      </div>
      <div className="container mt-3">
        <form onSubmit={submitHandler}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Emailingizni Kiriting"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
            <label for="floatingInput">Yangi Username (Loginni) kiriting</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Emailingizni Kiriting"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label for="floatingInput">Yangi Parolingizni Kiriting</label>
          </div>
          <div className="col-sm-4 offset-sm-4 offset-md-10 col-md-2">
            <button
              className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 w-100"
              type="submit"
            >
              Jo'natish
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
