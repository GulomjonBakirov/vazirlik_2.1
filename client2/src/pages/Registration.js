import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../store/actions/userActions";
import { Form, DatePicker, message, Checkbox } from "antd";
import "antd/dist/antd.css";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

const CheckboxGroup = Checkbox.Group;

const data = ["Toshkent", "Andijon", "Xorazm"];
const data2 = [
  { Toshkent: ["Yunusobod", "Chilonzor"] },
  { Andijon: ["Qorasuv", "Dexqonobod"] },
  { Xorazm: ["Nukus", "Bekobod"] },
];
const data3 = ["Vazirliklar", "Qomitalar", "Inspektsiyalar"];
const data4 = [
  { Vazirliklar: ["O'zb Transtport Vazirligi", "FVV Vazirligi"] },
  { Qomitalar: ["O'zb Transtport qomitalar", "Favqulotda qomitalar"] },
  {
    Inspektsiyalar: [
      "O'zb Transtport Inspektsiyalar",
      "Favqulotda Inspektsiyalar",
    ],
  },
];
const plainOptions = ["Word va Excel"];

export default function Registration({ history }) {
  const { loading, login, error, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
  };

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [fathName, setFathName] = useState("");
  const [time, setTime] = useState(Date.now);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [jshshir, setJshshir] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [jinsi, setJinsi] = useState("erkak");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [section, setSection] = useState("");
  const [position, setPosition] = useState("");
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      Surname: surName,
      Fathname: fathName,
      dateBirth: time,
      Login: userName,
      Parol: password,
      jshshir: jshshir,
      Hudud: region,
      Tuman: city,
      Sex: jinsi,
      email: email,
      wkphone: `998${phone}`,
      mlphone: `998${mobilePhone}`,
      Muassasa: organization,
      Muassasa2: organizationName,
      Bol: section,
      Lavoz: position,
      Course: checkedList,
    };

    dispatch(register(formData));
    message.success("Muvafaqqiyatli Ro'yxatdan o'tildi");
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      navigate("/login");
    }
    if (error) {
      message.error("Registration failed!");
      dispatch(clearErrors());
    }
  }, [navigate, login, error, dispatch]);

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>

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
                      <label for="floatingInput">Ism</label>
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
                      <label for="floatingInput">Familya</label>
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
                      <label for="floatingInput">Sharif</label>
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
                        required
                      />
                      <label for="floatingPassword">Password</label>
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
                      <label for="floatingInput">
                        JSHSHIR raqamini kiriting
                      </label>
                    </div>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="region"
                      onChange={(e) => setRegion(e.target.value)}
                      required
                    >
                      <option selected>Hududingizni Kiriting</option>
                      {data.map((d, index) => (
                        <option key={index} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                      disabled={region ? false : true}
                      required
                    >
                      <option>Shaharingizni Tanlang</option>
                      {data2.map((d) => {
                        return d[`${region}`]
                          ? d[`${region}`].map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))
                          : " ";
                      })}
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="sex"
                      onChange={(e) => setJinsi(e.target.value)}
                      required
                    >
                      <option value="erkak">Erkak</option>
                      <option value="ayol">Ayol</option>
                    </select>
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
                      <label for="floatingInput">Emailingizni kiriting</label>
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
                      <label for="floatingInput">
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
                      <label for="floatingInput">
                        {" "}
                        Ish xona telefonigizni kiriting
                      </label>
                    </div>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="organization"
                      onChange={(e) => setOrganization(e.target.value)}
                    >
                      <option selected>Muassangizni Kiriting</option>
                      {data3.map((d, index) => (
                        <option key={index} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      name="organizationName"
                      onChange={(e) => setOrganizationName(e.target.value)}
                      disabled={organization ? false : true}
                    >
                      <option>Muassangizni Kiriting</option>

                      {data4.map((d) => {
                        return d[`${organization}`]
                          ? d[`${organization}`].map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))
                          : " ";
                      })}
                    </select>

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
                      <label for="floatingInput">Bo'linmangizni Kiriting</label>
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
                      <label for="floatingInput">
                        Lavoziminigizni kiriting
                      </label>
                    </div>
                    <Form.Item
                      name="courses"
                      label="Kurslaringiz"
                      valuePropName="checked"
                      style={{ textAlign: "left" }}
                      rules={[
                        {
                          type: "array",
                        },
                      ]}
                    >
                      <CheckboxGroup
                        options={plainOptions}
                        value={checkedList}
                        onChange={onChange}
                      />
                    </Form.Item>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        data-loading-text="Loading..."
                        type="submit"
                      >
                        Ro'yxatdan o'tish
                      </button>
                      <div className="text-center">
                        Akkountingiz bo'lsa{" "}
                        <Link className="small" to="/login">
                          Kirish
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      </div>
    </div>
  );
}
