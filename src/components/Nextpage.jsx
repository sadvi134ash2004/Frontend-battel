import React, { useState } from "react";
import "../styles/nextpage.css";
import { Link } from "react-router-dom";

const Nextpage = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: [],
    q3: "",
    q4: "",
    q5: []
  });

  const [results, setResults] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [name]: [...prevAnswers[name], value]
        }));
      } else {
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [name]: prevAnswers[name].filter((item) => item !== value)
        }));
      }
    } else {
      setAnswers({ ...answers, [name]: value });
    }
  };

  const checkAnswer = (questionNumber) => {
    const correctAnswers = {
      q1: "a",
      q2: ["a", "b", "c", "d"],
      q3: "b",
      q4: "b",
      q5: ["a"]
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

        <div className="question1">
          <p className="qq1">1. What is the correct way to declare a variable in JavaScript?</p>
          <label className="lain">
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={handleChange}
            />
            a) var myVariable
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={handleChange}
            />
            b) variable myVariable
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={handleChange}
            />
            c) let is myVariable
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q1"
              value="d"
              onChange={handleChange}
            />
            d) const myVariable
          </label>
          <button className="plssub" onClick={() => checkAnswer(1)}>Submit</button>
          <p className="resq1">{results.q1}</p>
        </div>
        <div className="question2">
          <p className="qq2">2. Which of the following are JavaScript data types?</p>
          <label className="lain">
            <input
              type="checkbox"
              name="q2"
              value="a"
              onChange={handleChange}
            />
            a) Number
          </label>
          <label className="lain">
            <input
              type="checkbox"
              name="q2"
              value="b"
              onChange={handleChange}
            />
            b) String
          </label>
          <label className="lain">
            <input
              type="checkbox"
              name="q2"
              value="c"
              onChange={handleChange}
            />
            c) Boolean
          </label>
          <label className="lain">
            <input
              type="checkbox"
              name="q2"
              value="d"
              onChange={handleChange}
            />
            d) Object
          </label>
          <button className="plssub" onClick={() => checkAnswer(2)}>Submit</button>
          <p className="resq2">{results.q2}</p>
        </div>
        <div className="question3">
          <p className="qq3">3. Which keyword is used to declare a constant variable in JavaScript?</p>
          <label className="lain">
            <input
              type="radio"
              name="q3"
              value="a"
              onChange={handleChange}
            />
            a) let
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q3"
              value="b"
              onChange={handleChange}
            />
            b) const
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q3"
              value="c"
              onChange={handleChange}
            />
            c) var
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q3"
              value="d"
              onChange={handleChange}
            />
            d) def
          </label>
          <button className="plssub" onClick={() => checkAnswer(3)}>Submit</button>
          <p className="resq3">{results.q3}</p>
        </div>
        <div className="question4">
          <p className="qq4">4. What is the output of 2 + '2' in JavaScript?</p>
          <label className="lain">
            <input
              type="radio"
              name="q4"
              value="a"
              onChange={handleChange}
            />
            a) 4
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q4"
              value="b"
              onChange={handleChange}
            />
            b) "22"
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q4"
              value="c"
              onChange={handleChange}
            />
            c) 2"2"
          </label>
          <label className="lain">
            <input
              type="radio"
              name="q4"
              value="d"
              onChange={handleChange}
            />
            d) Error
          </label>
          <button className="plssub" onClick={() => checkAnswer(4)}>Submit</button>
          <p className="resq4">{results.q4}</p>
        </div>
        <div className="question5">
          <p className="qq5">5. Which function is used to remove the last element from an array in JavaScript?</p>
          <label className="lain">
            <input
              type="checkbox"
              name="q5"
              value="a"
              onChange={handleChange}
            />
            a) pop()
          </label>
          <label className="lain">
            <input
              type="checkbox"
              name="q5"
              value="b"
              onChange={handleChange}
            />
            b) slice()
          </label>
          <label className="lain">
            <input
              type="checkbox"
              name="q5"
              value="c"
              onChange={handleChange}
            />
            c) splice()
          </label>
          <label className="lain">
            <input
              type="checkbox"
              name="q5"
              value="d"
              onChange={handleChange}
            />
            d) shift()
          </label>
          <button className="plssub" onClick={() => checkAnswer(5)}>Submit</button>
          <p className="resq5">{results.q5}</p>
        </div>
        <Link to="/HTMLquiz">
          <button className="NP">Previous Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Nextpage;
