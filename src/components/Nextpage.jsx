import React, { useState } from "react";
import "../styles/nextpage.css";
import { Link } from "react-router-dom";

const Nextpage = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: [],
    q3: "",
    q4: "",
    q5: [],
    q6: "",
    q7: "",
    q8: [],
    q9: "",
    q10: []
  });

  const [results, setResults] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedValues = checked
        ? [...answers[name], value]
        : answers[name].filter((item) => item !== value);
      setAnswers({ ...answers, [name]: updatedValues });
    } else {
      setAnswers({ ...answers, [name]: value });
    }
  };

  const checkAnswer = (questionNumber) => {
    const correctAnswers = {
      q1: "c",
      q2: ["b", "d"],
      q3: "a",
      q4: "b",
      q5: ["a", "c"],
      q6: "b",
      q7: "c",
      q8: ["a", "b"],
      q9: "a",
      q10: ["b", "c"]
    };

    const userAnswer = answers[`q${questionNumber}`];
    const correctAnswer = correctAnswers[`q${questionNumber}`];

    if (
      (Array.isArray(userAnswer) &&
        userAnswer.length === correctAnswer.length &&
        userAnswer.every((item) => correctAnswer.includes(item))) ||
      userAnswer === correctAnswer
    ) {
      setResults({ ...results, [`q${questionNumber}`]: "Correct!" });
    } else {
      setResults({ ...results, [`q${questionNumber}`]: "Wrong!" });
    }
  };

  return (
    <div className="supercontainer">
      <div className="quizscontainer">
        <h1>JavaScript Quiz</h1>

        <div className="question">
          <p>1. What is the output of <code>typeof null</code>?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={handleChange}
            />
            a) "object"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={handleChange}
            />
            b) "null"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={handleChange}
            />
            c) "object" or "null"
          </label>
          <br />
          <button className="plssub"onClick={() => checkAnswer(1)}>Submit</button>
          <p>{results.q1}</p>
        </div>

        <div className="question">
          <p>1. What is the output of <code>typeof null</code>?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={handleChange}
            />
            a) "object"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={handleChange}
            />
            b) "null"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={handleChange}
            />
            c) "object" or "null"
          </label>
          <br />
          <button className="plssub"onClick={() => checkAnswer(1)}>Submit</button>
          <p>{results.q1}</p>
        </div>

        <div className="question">
          <p>1. What is the output of <code>typeof null</code>?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={handleChange}
            />
            a) "object"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={handleChange}
            />
            b) "null"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={handleChange}
            />
            c) "object" or "null"
          </label>
          <br />
          <button className="plssub"onClick={() => checkAnswer(1)}>Submit</button>
          <p>{results.q1}</p>
        </div>

        <div className="question">
          <p>1. What is the output of <code>typeof null</code>?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={handleChange}
            />
            a) "object"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={handleChange}
            />
            b) "null"
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={handleChange}
            />
            c) "object" or "null"
          </label>
          <br />
          <button className="plssub"onClick={() => checkAnswer(1)}>Submit</button>
          <p>{results.q1}</p>
        </div>

        <div className="question">
          <p>2. Which of the following are JavaScript data types?</p>
          <label>
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) Object
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) String
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Function
          </label>
          <br />
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p>{results.q2}</p>
        </div>

        <div className="question">
          <p>2. Which of the following are JavaScript data types?</p>
          <label>
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) Object
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) String
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Function
          </label>
          <br />
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p>{results.q2}</p>
        </div>

        <div className="question">
          <p>2. Which of the following are JavaScript data types?</p>
          <label>
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) Object
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) String
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Function
          </label>
          <br />
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p>{results.q2}</p>
        </div>

        <div className="question">
          <p>2. Which of the following are JavaScript data types?</p>
          <label>
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) Object
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) String
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Function
          </label>
          <br />
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p>{results.q2}</p>
        </div>

        <div className="question">
          <p>2. Which of the following are JavaScript data types?</p>
          <label>
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) Object
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) String
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Function
          </label>
          <br />
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p>{results.q2}</p>
        </div>

        <div className="question">
          <p>2. Which of the following are JavaScript data types?</p>
          <label>
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) Object
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) String
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Function
          </label>
          <br />
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p>{results.q2}</p>
        </div>

        <Link to="/nextpage">
          <button className="NP">Previous Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Nextpage;
