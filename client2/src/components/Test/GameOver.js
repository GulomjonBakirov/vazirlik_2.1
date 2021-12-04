import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserGrade,
  updateUserLesson,
  clearErrors,
} from "../../store/actions/userActions";
import { getAllVideos } from "../../store/actions/videoActions";
import { useTab } from "../../Context/TabProvider";
import { useEffect } from "react";

const GameOver = ({ pts, sortedTestsLentgh, props, category }) => {
  const { loading, user, error } = useSelector((state) => state.auth);
  const {
    loading: videoLoading,
    error: videoError,
    videos,
  } = useSelector((state) => state.videos);

  const [value, setValue] = useTab();

  const dispatch = useDispatch();

  let sortedVideos = [];
  let allVideos = [];

  if (Array.isArray(videos)) {
  } else {
    for (const key in videos) {
      if (key.toLowerCase() === "word") {
        sortedVideos.push(videos[key]);
      } else if (key.toLowerCase() === "excel") {
        allVideos.push(videos[key]);
      }
    }
  }

  const finishQuiz = (e) => {
    e.preventDefault();
    const userData = (pts / sortedTestsLentgh) * 100;
    if (category === "word") {
      dispatch(updateUserGrade(user && user?.user._id, userData, category));
    }
    const newValue = value + 1;

    if (newValue < allVideos[0]?.length + sortedVideos[0]?.length) {
      dispatch(updateUserLesson(user && user?.user._id, newValue));
    }
    setValue(newValue);
    // setValue((x) => ++x);
  };

  return (
    <>
      <h1 style={{ marginTop: "4em", fontSize: "48px" }}>Test Tugadi</h1>
      <p style={{ fontSize: "24px", marginBottom: "3em" }}>
        Siz {sortedTestsLentgh} ta savoldan {pts} tasiga to'g'ri javob berdingiz
      </p>
      {(pts / sortedTestsLentgh) * 100 > 60 ? (
        <button className="quizBtn" onClick={finishQuiz}>
          Keyingi Bo'limga O'tish
        </button>
      ) : (
        <h2>Darslarni boshidan diqqat bilan qayta boshlang</h2>
      )}
    </>
  );
};

// Dars: [
//   {
//     category: "Excel",
//     darslik: 0,
//   },
//   {
//     category: "Word",
//     darslik: 0,
//   },
// ];
export default GameOver;
