import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { clearErrors, logout } from "../store/actions/userActions";
import Loading from "../components/Loading";
import "../styles/profile.css";
import ModalContent from "../components/ModalContent";
import CourseDetails from "../components/CourseDetails";

export default function Profile() {
  const { error, loading, isAuthanticated, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }
  }, []);

  const logoutHanlder = () => {
    dispatch(logout());
    navigate("/");
    message.success("Muvafaqqiyatli Tizimdan Chiqildi!!!");
  };
  return loading ? (
    <Loading />
  ) : user ? (
    <div className="profileContent">
      <div className="container">
        <div className="main-body">
          {/* <!-- Breadcrumb --> */}
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
          {/* <!-- /Breadcrumb --> */}

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <h4>{`${user.user?.name} ${user.user?.Surname} ${user.user?.FatherName} `}</h4>
                    <p className="text-secondary mb-1">
                      Bo'linma: {`${user.user?.Division}`}
                    </p>
                    <p className="text-muted font-size-sm">
                      Lavozimi: {`${user.user?.Position}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">FISH</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${user.user?.name} ${user.user?.Surname} ${user.user?.FatherName} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{`${user.user?.Email}`}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tug'ilgan Sanasi</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{`${user.user?.DateBirth}`}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Login</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{`${user.user?.username}`}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${user.user?.Workph}`}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${user.user?.Homeph}`}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${user.user?.Region}, ${user.user?.District} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Muassasisi</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${user.user?.Muassasasi2} `}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12 d-flex  justify-content-between">
                      <Link
                        className="btn btn-outline-warning "
                        to={`/profile/edit/${user.user?._id}`}
                      >
                        Tahrirlash
                      </Link>
                      <button
                        className="btn btn-outline-danger "
                        onClick={logoutHanlder}
                      >
                        Chiqish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-center">Mening Kurslarim</h2>
              {user &&
                user.user?.Courses.map((e, index) => (
                  <CourseDetails key={index} category={e} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Link to="/login">Kirish</Link>
  );
}
