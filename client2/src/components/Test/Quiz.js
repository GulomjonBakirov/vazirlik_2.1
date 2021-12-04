import React, { useState, useEffect } from "react";
import axios from "axios";
import GameOver from "../takeCertificateTest/GiveCertificate";
import { getAllTests, clearErrors } from "../../store/actions/testActions";
import { getAllVideos } from "../../store/actions/videoActions";

import { shuffle } from "../../utils/sortArrayRandomly";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Quiz = ({
  props,
  grade,
  category,
  allVideoEachCategory,
  allVideoAnotherCategory,
}) => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);

  const { loading, error, tests } = useSelector((state) => state.tests);
  const {
    loading: videoLoading,
    error: videoError,
    videos,
  } = useSelector((state) => state.videos);

  const url = useLocation();

  let sortedTests = [];
  let allTests = [];
  if (tests?.length) {
    tests?.forEach((test) => {
      if (test.Category.toLowerCase() === category) {
        sortedTests.push(test);
      } else {
        allTests.push(test);
      }
    });
  }

  if (tests && tests.length === 0) {
  } else {
  }

  useEffect(() => {
    if (tests) {
      setQuiz(
        sortedTests.map((item) => ({
          question: item.test,
          options: shuffle([...item.answerFalse, item.answerTrue]),
          answer: item.answerTrue,
        }))
      );
    }
  }, []);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };

  return (
    <div className="quizWindow">
      {quiz[number] && (
        <>
          <div
            className="question"
            dangerouslySetInnerHTML={{ __html: quiz[number].question }}
          ></div>

          <div className="options">
            {quiz[number].options.map((item, index) => (
              <button
                className="option"
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={pickAnswer}
              ></button>
            ))}
          </div>
        </>
      )}
      {number === sortedTests.length && (
        <GameOver
          pts={pts}
          sortedTestsLentgh={sortedTests.length}
          props={props}
          category={category}
        />
      )}
    </div>
  );
};

export default Quiz;
