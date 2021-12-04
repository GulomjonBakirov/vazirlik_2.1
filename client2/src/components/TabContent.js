import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import YouTube from "react-youtube";
import { useSelector, useDispatch } from "react-redux";
import { shuffle } from "../utils/sortArrayRandomly";
import getWindowDimensions from "../utils/getWindowDimensions";
import { updateUserLesson } from "../store/actions/userActions";
import { message } from "antd";
import "../styles/oneTest.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TapContent({
  value,
  indexof,
  video,
  test,
  setValue,
  allVideoEachCategory,
  allVideoAnotherCategory,
}) {
  const [duration, setDuration] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const {
    loading: userLoading,
    error: userError,
    user,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testingCon = useRef();
  const answerBtns = useRef();
  const subBtn = useRef();

  const opts = {
    height: "390",
    width:
      windowDimensions.width < 1000 && windowDimensions.width > 800
        ? "480"
        : windowDimensions.width < 800 && windowDimensions.width > 600
        ? "320"
        : windowDimensions.width < 600 && windowDimensions.width > 400
        ? "480"
        : windowDimensions.width < 400 && windowDimensions.width > 200
        ? "200"
        : "800",
    playerVars: {
      autoplay: 1,
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newValue = ++value;

    if (
      newValue <
      allVideoEachCategory.length + allVideoAnotherCategory.length
    ) {
      dispatch(updateUserLesson(user && user?.user._id, newValue));
    }
    setValue(newValue);
  };

  const afterVideo = () => {
    const testingContent = testingCon.current.classList;
    testingContent.remove("d-none");
    testingContent.add("d-block");
  };

  let answers = [];

  // test[0].answerFalse.forEach((i) => answers.push(i));
  // answers.push(test[0].answerTrue);
  answers = [...test[0].answerFalse, test[0].answerTrue];
  shuffle(answers);

  const checkTest = (e) => {
    e.preventDefault();
    const answer = e.target.innerHTML;
    for (const val of answerBtns.current.children) {
      val.classList.remove("active");
    }
    e.target.classList.add("active");

    if (answer === test[0].answerTrue) {
      message.success(
        "Javobingiz To'g'ri Keyingi Darsga o'tishingiz mumkin",
        0.5
      );
      const subButton = subBtn.current.classList;
      subButton.remove("d-none");
      subButton.add("d-block");
    } else {
      message.error("Javobingiz Xato qayta urinib koring", 0.5);
    }
  };

  return (
    <div>
      <TabPanel value={value} index={indexof}>
        <h3 className="text-center w-100">{video.Goal}</h3>
        <div className="d-flex justify-content-center">
          <YouTube
            videoId={video.Lesson}
            opts={opts}
            onEnd={() => afterVideo()}
            // onReady={(e) => _onReady(e)}
            onStateChange={(e) => setDuration(e.target.getDuration())}
          />
        </div>

        <div
          className="text-center d-none border mt-5 p-1"
          style={{ width: "100%" }}
          ref={testingCon}
        >
          <h1>{test[0].test}</h1>
          <form onSubmit={submitHandler}>
            <div
              className={`d-flex align-items-center justify-content-around w-100 ${
                windowDimensions.width < 800 ? "flex-wrap" : ""
              }`}
              ref={answerBtns}
            >
              {answers.map((answer) => (
                <button
                  type="button"
                  className="btn btn-outline-primary mb-2"
                  style={{
                    width: windowDimensions.width < 800 ? "45%" : "",
                    // flex: windowDimensions.width < 800 ? "50%" : "",
                    // width: windowDimensions.width < 800 ? "45%" : "",
                  }}
                  onClick={checkTest}
                >
                  {answer}
                </button>
              ))}
            </div>
            <button
              className={`btn btn-outline-warning mt-3 d-none `}
              style={{ float: "right", marginRight: "5%" }}
              ref={subBtn}
            >
              Keyingisi
            </button>
          </form>
        </div>
      </TabPanel>
    </div>
  );
}
