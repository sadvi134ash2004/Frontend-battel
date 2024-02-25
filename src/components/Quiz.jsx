import React, { useState } from "react";
import "../styles/Quiz.css";

const Quiz = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const showAnswer = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return "The correct answer is <input>.";
      case 2:
        return "The correct answer is <a>.";
      case 3:
        return "The correct answer is <img>.";
      case 4:
        return "The correct answer is <form>.";
      default:
        return "";
    }
  };

  const checkAnswer = (questionNumber) => {
    const correctAnswers = {
      question1: "<input>",
      question2: "<a>",
      question3: "<img>",
      question4: "<form>",
    };

    const userAnswer = answers[`question${questionNumber}`];
    const correctAnswer = correctAnswers[`question${questionNumber}`];

    if (userAnswer === correctAnswer) {
      setResult(`Question ${questionNumber}: Correct!`);
    } else {
      setResult(`Question ${questionNumber}: Wrong!`);
    }
  };

  //   const checkAllAnswers = () => {
  //     for (let i = 1; i <= 4; i++) {
  //       checkAnswer(i);
  //     }
  //   };

  return (
    <div className="maincontainer">
      <div className="quiz-container">
        <h1>HTML QUIZ</h1>
        <div className="question">
          <label htmlFor="question1">
            What HTML tag is used to define input fields?
          </label>
          <input
            type="text"
            id="question1"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
          />
          <button onClick={() => alert(showAnswer(1))} className="btt-1">
            Show Answer
          </button>
          <button onClick={() => checkAnswer(1)} className="btt-2">
            Submit
          </button>
        </div>
        <div className="question">
          <label htmlFor="question2">
            What HTML tag is used to create links?
          </label>
          <input
            type="text"
            id="question2"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
          />
          <button onClick={() => alert(showAnswer(2))} className="btt-1">
            Show Answer
          </button>
          <button onClick={() => checkAnswer(2)} className="btt-2">
            Submit
          </button>
        </div>
        <div className="question">
          <label htmlFor="question3">
            What HTML tag is used to display an image?
          </label>
          <input
            type="text"
            id="question3"
            name="question3"
            value={answers.question3}
            onChange={handleChange}
          />
          <button onClick={() => alert(showAnswer(3))} className="btt-1">
            Show Answer
          </button>
          <button onClick={() => checkAnswer(3)} className="btt-2">
            Submit
          </button>
        </div>
        <div className="question">
          <label htmlFor="question4">
            What HTML tag is used to create a form?
          </label>
          <input
            type="text"
            id="question4"
            name="question4"
            value={answers.question4}
            onChange={handleChange}
          />
          <button onClick={() => alert(showAnswer(4))} className="btt-1">
            Show Answer
          </button>
          <button onClick={() => checkAnswer(4)} className="btt-2">
            Submit
          </button>
        </div>
        {/* <button onClick={checkAllAnswers}>Check Answers</button> */}
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Quiz;
