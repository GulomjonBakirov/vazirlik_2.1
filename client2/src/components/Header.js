import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function Header({ restore }) {
  const {
    loading,
    error,
    isAuthanticated,
    user: User,
  } = useSelector((state) => state.auth);

  return (
    <div className="container-fluid header_bottom_bg">
      <section className="header_bottom_block row">
        <div className="col-md-6 col-sm-7">
          <Link to="/" className="logo">
            <img
              width="100"
              height="96"
              src="/assets/images/gerbUzb.png"
              alt="Uzbekistan Gerbi"
            />
            <span>
              <b>Hodimlarni qayta o'qitish platformasi</b>
            </span>
          </Link>
        </div>

        {!restore ? (
          loading ? (
            <CircularProgress />
          ) : isAuthanticated ? (
            <div className="col-md-6 col-sm-5 header_bottom_right">
              {" "}
              <Link className="login__title" to="/profile">
                Profilga Kirish
              </Link>
            </div>
          ) : (
            <div className="col-md-6 col-sm-5 header_bottom_right">
              <Link className="login__title" to="/login">
                <i className="fas fa-sign-in-alt"></i> Kirish
              </Link>
              <Link className="login__title" to="/registration">
                <i className="fas fa-user"></i> Ro'yhatdan o'tish
              </Link>
            </div>
          )
        ) : (
          <div></div>
        )}

        {/* <div className="col-md-6 col-sm-5 header_bottom_right">
          <ul className="lang">
            <li className="active">
              <a href="">Ўзб</a>
            </li>
            <li className="">
              <a href="">O'zb</a>
            </li>
            <li className="">
              <a href="">Рус</a>
            </li>
            <li className="">
              <a href="">Eng</a>
            </li>
          </ul>
        </div> */}
      </section>
    </div>
  );
}
