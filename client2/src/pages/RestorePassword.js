import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { restorePassword, clearErrors } from "../store/actions/userActions";
import { RESTORE_PASSWORD_RESET } from "../store/constants/userConstants";
import { message } from "antd";
import "antd/dist/antd.css";

export default function RestorePassword() {
  const [email, setEmail] = useState("");

  const { error, loading, configData, isHad } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      error.status === 500
        ? message.error("Bunday Email Mavjud emas")
        : message.error(error);
      dispatch(clearErrors());
    }
    if (isHad) {
      message.success("Next Etap");
      navigate("/restore/updatePassword");
      dispatch({ type: RESTORE_PASSWORD_RESET });
    }
  }, [dispatch, error, isHad, message, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(restorePassword(email));
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
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Emailingizni Kiriting"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label for="floatingInput">Emailingizni kiriting</label>
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
