import "./Quiz.css";
import React, { useEffect, useState } from "react";
import { mockFetch } from "../../utils/utils";
import { Navigate } from "react-router-dom";

function Quiz({ quiz, questions }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setAnswers(new Array(questions.length).fill(""));
    setResults([]);
    setFinished(false);
    setIndex(0);
  }, [questions]);

  function nextQuestion() {
    setIndex((index) => index + 1);
  }

  function prevQuestion() {
    setIndex((index) => index - 1);
  }

  function onAnswerChange(e) {
    setAnswers((answers) =>
      answers.map((answer, i) => {
        if (i === index) {
          return e.target.value;
        } else {
          return answer;
        }
      })
    );
  }

  function submit() {
    const userAnswers = answers.map((a) => (a === "" ? null : parseInt(a)));

    mockFetch(`validate/${quiz}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userAnswers),
    })
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
        setFinished(true);
      });
  }
  function dotsIndex() {
    return questions.map((_, i) => {
      return (
        <div
          key={i}
          className={`Quiz-Dot ${i === index ? "currentQuestion" : ""}
          ${finished ? (results[i] ? "Dots-Correct" : "Dots-Incorrect") : ""}  
          `}
        ></div>
      );
    });
  }

  return (
    <>
      <div className="Quiz-Container">
        <button
          className="Quiz-Arrow"
          disabled={index == 0}
          onClick={prevQuestion}
        >
          &lt;
        </button>
        <div className="Quiz-Center">
          <div className="Quiz-Question">{questions[index]}</div>
          <input
            disabled={finished}
            onChange={onAnswerChange}
            value={answers[index] || ""}
            type="number"
            placeholder="Answer"
            className={`Quiz-Answer ${
              finished ? (results[index] ? "Correct" : "Incorrect") : ""
            }`}
          ></input>
          {index == questions.length - 1 ? (
            finished ? (
              <button className="Quiz-Button" onClick={() => Navigate('/quiz/{quiz + 1}')}>
                Next Quiz
              </button>
            ) : (
              <button className="Quiz-Button" onClick={submit}>
                Submit
              </button>
            )
          ) : (
            <></>
          )}
        </div>
        <button
          className="Quiz-Arrow"
          disabled={index == questions.length - 1}
          onClick={nextQuestion}
        >
          &gt;
        </button>
      </div>
      <div className="Dots-Container">{dotsIndex()}</div>
    </>
  );
}

export default Quiz;
