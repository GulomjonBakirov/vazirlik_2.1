import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  updateUser,
  loadUser,
} from "../store/actions/userActions";
import { UPDATE_USER_RESET } from "../store/constants/userConstants";
import Loading from "../components/Loading";
import { Form, DatePicker, message, Checkbox } from "antd";
import "antd/dist/antd.css";
import "../styles/login.css";
import "../styles/profile.css";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [fathName, setFathName] = useState("");
  const [time, setTime] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [jshshir, setJshshir] = useState("");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [section, setSection] = useState("");
  const [position, setPosition] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user && user.user?.name);
      setSurName(user && user.user?.Surname);
      setFathName(user && user.user?.FatherName);
      setTime(user && user.user?.DateBirth);
      setUserName(user && user.user?.username);
      setJshshir(user && user.user?.JSHSHIR);
      setEmail(user && user.user?.Email);
      setMobilePhone(parseInt(user && user.user?.Workph.substr(4, 9)));
      setPhone(parseInt(user && user.user?.Homeph.substr(4, 9)));
      setSection(user && user.user?.Division);
      setPosition(user && user.user?.Position);
    }
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      message.success("Muvafaqiyatli Yangilandi");
      dispatch(loadUser());
      navigate("/profile");

      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, message, error, navigate, isUpdated, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      Updname: name,
      UpdSurname: surName,
      UpdFathname: fathName,
      UpddateBirth: time,
      UpdLogin: userName,
      Updjshshir: jshshir,
      Updemail: email,
      Updwkphone: `998${phone}`,
      Updmlphone: `998${mobilePhone}`,
      UpdBol: section,
      UpdLavoz: position,
    };

    dispatch(updateUser(user && user.user?._id, formData));
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
              <li className="breadcrumb-item">
                <Link to="/profile">User Profile</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit Profile
              </li>
            </ol>
          </nav>
          {/* <!-- /Breadcrumb --> */}

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <h4>{`${user && user.user?.name} ${
                      user && user.user?.Surname
                    } ${user && user.user?.FatherName} `}</h4>
                    <p className="text-secondary mb-1">
                      Bo'linma: {`${user && user.user?.Division}`}
                    </p>
                    <p className="text-muted font-size-sm">
                      Lavozimi: {`${user && user.user?.Position}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <form onSubmit={submitHandler}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Ism"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  <label htmlFor="floatingInput">Ism</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Familya"
                    onChange={(e) => setSurName(e.target.value)}
                    value={surName}
                    required
                  />
                  <label htmlFor="floatingInput">Familya</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Sharif"
                    onChange={(e) => setFathName(e.target.value)}
                    value={fathName}
                    required
                  />
                  <label htmlFor="floatingInput">Sharif</label>
                </div>
                <div className="form-floating mb-3">
                  <Form.Item
                    name="datePicker"
                    label="Tug'ilgan Sanasi"
                    required
                  >
                    <DatePicker
                      onChange={(e) => setTime(e.format("YYYY-MM-DD"))}
                      value={time}
                    />
                  </Form.Item>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    required
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="JSHSHIR raqamini kiriting"
                    onChange={(e) => setJshshir(e.target.value)}
                    value={jshshir}
                    required
                  />
                  <label htmlFor="floatingInput">
                    JSHSHIR raqamini kiriting
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Emailingizni  kiriting"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <label htmlFor="floatingInput">Emailingizni kiriting</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Mobil telefoningizni  kiriting"
                    onChange={(e) => setMobilePhone(e.target.value)}
                    value={mobilePhone}
                    required
                  />
                  <label htmlFor="floatingInput">
                    Mobil telefoningizni kiriting
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Ish xona telefonigizni kiriting"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                  <label htmlFor="floatingInput">
                    {" "}
                    Ish xona telefonigizni kiriting
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Bo'linmangizni kiriting"
                    onChange={(e) => setSection(e.target.value)}
                    value={section}
                    required
                  />
                  <label htmlFor="floatingInput">Bo'linmangizni Kiriting</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Lavoziminigizni kiriting"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    required
                  />
                  <label htmlFor="floatingInput">
                    Lavoziminigizni kiriting
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
                  >
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Link to="/login">Kirish</Link>
  );
}
