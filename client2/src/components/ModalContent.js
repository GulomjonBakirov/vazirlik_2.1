import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, clearErrors } from "../store/actions/userActions";
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

const ModalContent = ({ isModalVisible, handleCancel }) => {
  const { error, loading, isAuthanticated, user } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState(user.user?.name);
  const [surName, setSurName] = useState(user.user?.Surname);
  const [fathName, setFathName] = useState(user.user?.FatherName);
  const [time, setTime] = useState(user.user?.DateBirth);
  const [userName, setUserName] = useState(user.user?.username);
  const [jshshir, setJshshir] = useState(user.user?.JSHSHIR);
  const [region, setRegion] = useState(user.user?.Region);
  const [city, setCity] = useState(user.user?.District);
  const [jinsi, setJinsi] = useState(user.user?.Jinsi);
  const [email, setEmail] = useState(user.user?.Email);
  const [mobilePhone, setMobilePhone] = useState(
    parseInt(user.user?.Workph.substr(4, 9))
  );
  const [phone, setPhone] = useState(parseInt(user.user?.Homeph.substr(4, 9)));
  const [organization, setOrganization] = useState(user.user?.Muassasasi);
  const [organizationName, setOrganizationName] = useState(
    user.user?.Muassasasi2
  );
  const [section, setSection] = useState(user.user?.Division);
  const [position, setPosition] = useState(user.user?.Position);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      Updname: name,
      UpdSurname: surName,
      UpdFathname: fathName,
      UpddateBirth: time,
      UpdLogin: userName,
      Updjshshir: jshshir,
      UpdHudud: region,
      UpdTuman: city,
      UpdSex: jinsi,
      Updemail: email,
      Updwkphone: `998${phone}`,
      Updmlphone: `998${mobilePhone}`,
      UpdMuassasa: organization,
      UpdMuassasa2: organizationName,
      UpdBol: section,
      UpdLavoz: position,
    };

    dispatch(updateUser(user.user?._id, formData));
    message.success("Submit success!");
  };
  return (
    <>
      <Modal
        title="Tahrirlash"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
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
            <Form.Item name="datePicker" label="Tug'ilgan Sanasi" required>
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
            <label htmlFor="floatingInput">JSHSHIR raqamini kiriting</label>
          </div>
          {/* <select
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
          </select> */}
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
            <label htmlFor="floatingInput">Mobil telefoningizni kiriting</label>
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
          {/* <select
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
          </select> */}

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
            <label htmlFor="floatingInput">Lavoziminigizni kiriting</label>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
              type="submit"
              onClick={handleCancel}
            >
              Saqlash
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalContent;
