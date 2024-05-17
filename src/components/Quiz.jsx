import React, { useState } from "react";
import "../styles/Quiz.css";
import {Link} from 'react-router-dom';

const Quiz = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  
  // Maintain separate state variables for each question's result
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const showAnswer = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return "The correct answer is <input></input>.";
      case 2:
        return "The correct answer is <a></a>.";
      case 3:
        return "The correct answer is <img></img>.";
      case 4:
        return "The correct answer is <form></form>.";
      case 5:
        return "The correct answer is <button></button>.";  
      default:
        return "";
    }
  };

  const checkAnswer = (questionNumber) => {
    const correctAnswers = {
      question1: "<input></input>",
      question2: "<a></a>",
      question3: "<img></img>",
      question4: "<form></form>",
      question5: "<button></button>",
    };

    const userAnswer = answers[`question${questionNumber}`];
    const correctAnswer = correctAnswers[`question${questionNumber}`];

    if (userAnswer === correctAnswer) {
      switch (questionNumber) {
        case 1:
          setResult1(`Question ${questionNumber}: Correct!`);
          break;
        case 2:
          setResult2(`Question ${questionNumber}: Correct!`);
          break;
        case 3:
          setResult3(`Question ${questionNumber}: Correct!`);
          break;
        case 4:
          setResult4(`Question ${questionNumber}: Correct!`);
          break;
        case 5:
          setResult5(`Question ${questionNumber}: Correct!`);
          break;
        default:
          break;
      }
    } else {
      switch (questionNumber) {
        case 1:
          setResult1(`Question ${questionNumber}: Wrong!`);
          break;
        case 2:
          setResult2(`Question ${questionNumber}: Wrong!`);
          break;
        case 3:
          setResult3(`Question ${questionNumber}: Wrong!`);
          break;
        case 4:
          setResult4(`Question ${questionNumber}: Wrong!`);
          break;
        case 5:
          setResult5(`Question ${questionNumber}: Wrong!`);
          break;
        default:
          break;
      }
    }
  };

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
          <button onClick={() => checkAnswer(1) } className="btt-2">
            Submit
          </button>
        <p>{result1}</p>
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
        <p>{result2}</p>
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
        <p>{result3}</p>
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
        <p>{result4}</p>
        </div>
        <div className="question">
          <label htmlFor="question5">
            What HTML tag is used to display an button?
          </label>
          <input
            type="text"
            id="question5"
            name="question5"
            value={answers.question5}
            onChange={handleChange}
          />
          <button onClick={() => alert(showAnswer(5))} className="btt-1">
            Show Answer
          </button>
          <button onClick={() => checkAnswer(5)} className="btt-2">
            Submit
          </button>
        </div>
        <p>{result5}</p>
        <Link to="/nextpage"><button className="NP">Next Page</button></Link>
      </div>
    </div>
  );
};

export default Quiz;
