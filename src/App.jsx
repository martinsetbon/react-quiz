import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Rome", isCorrect: false },
    ],
  },
  {
    questionText: "Which programming language is primarily used for web development?",
    answerOptions: [
      { answerText: "Python", isCorrect: false },
      { answerText: "C++", isCorrect: false },
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "Java", isCorrect: false },
    ],
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: true },
      { answerText: "Jupiter", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "Who developed the theory of relativity?",
    answerOptions: [
      { answerText: "Isaac Newton", isCorrect: false },
      { answerText: "Albert Einstein", isCorrect: true },
      { answerText: "Galileo Galilei", isCorrect: false },
      { answerText: "Nikola Tesla", isCorrect: false },
    ],
  },
  {
    questionText: "What is the largest ocean on Earth?",
    answerOptions: [
      { answerText: "Atlantic Ocean", isCorrect: false },
      { answerText: "Indian Ocean", isCorrect: false },
      { answerText: "Pacific Ocean", isCorrect: true },
      { answerText: "Southern Ocean", isCorrect: false },
    ],
  },
  {
    questionText: "Which element has the chemical symbol 'O'?",
    answerOptions: [
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "Osmium", isCorrect: false },
      { answerText: "Oganesson", isCorrect: false },
      { answerText: "Ozone", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
        <div className="p-2 border text-center font-bold mb-2 text-xl">Quiz App</div>

        {showScore ? (
          <div className="text-center">
            <div>You scored {score} of {questions.length}</div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-4">{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOption(index, option.isCorrect)}
                className={`block w-full p-2 mt-2 rounded border ${
                  answered
                    ? option.isCorrect
                      ? "bg-green-200"
                      : selectedAnswer === index
                      ? "bg-red-200"
                      : ""
                    : ""
                }`}
              >
                {option.answerText}
              </button>
            ))}
            <button
              className={`${
                answered ? "bg-green-500" : "bg-green-300"
              } block w-full text-white p-2 rounded mt-4`}
              disabled={!answered}
              onClick={NextQuestion}
            >
              Next question
            </button>
            <p className="text-center text-gray-400 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;
