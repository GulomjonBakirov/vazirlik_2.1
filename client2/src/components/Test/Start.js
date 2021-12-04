import React from "react";

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <div style={{ marginTop: "8em", textAlign: "center" }}>
      <h1>Test faqat 1 marta ishlanadi shuning uchun etibor bilan ishlang</h1>
      <button
        className="quizBtn"
        onClick={startQuiz}
        style={{ marginTop: "2em" }}
      >
        Boshlash
      </button>
    </div>
  );
};

export default Start;
