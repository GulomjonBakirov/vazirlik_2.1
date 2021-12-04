import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

const UnWorked = () => {
  return (
    <div>
      <Header restore={true} />
      <Menu />
      <Result
        status="warning"
        title="Sahifamiz qayta ishlanmoqda"
        extra={
          <div>
            <Button type="primary" key="console">
              <Link to="/">Bosh Sahifa</Link>
            </Button>
            <Button type="primary" key="console" style={{ marginLeft: "20px" }}>
              <Link to="/profile">Profilga O'tish</Link>
            </Button>
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default UnWorked;
