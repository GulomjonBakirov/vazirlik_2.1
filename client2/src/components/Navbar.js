import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className="container-fluid header_top_bg">
      <section className="header_top_block row">
        <div className="col-md-5 col-sm-5 col-xs-4 header_left">
          <div className="phone_box">
            <i className="glyphicon glyphicon-earphone"></i>+9988 859 69 69
          </div>
        </div>
        <div className="col-md-7 col-sm-7 col-xs-8 header_right">
          <div className="timeCountainer hideable">
            <span id="timecontainer">{`${time.toLocaleTimeString()}   ${time.toDateString()}`}</span>
          </div>
          <div className="email_box">
            <div className="message-icon">
              <i className="fal fa-envelope"></i>
            </div>
            dilshod@gmail.com
          </div>
        </div>
        <div className="clearfix"></div>
      </section>
    </div>
  );
}
