import React, { useState, useEffect } from "react";
import QuestionCard from "../../utility/QuestionCard";

const questions = Array.from({ length: 20 }, (_, i) => ({
  text: `This is question ${i + 1}`,
  options: ["Option A", "Option B", "Option C", "Option D"],
}));

function Test() {
  const userName = "Jaypal Patel";
  const userRole = "MERN Stack Developer";
  const totalTime = 30 * 60;

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [visitedQuestions, setVisitedQuestions] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  useEffect(() => {
    setVisitedQuestions((prev) => new Set(prev).add(currentQ));
  }, [currentQ]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleAnswer = (qIndex, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const attempted = Object.keys(selectedAnswers).length;
  const visited = visitedQuestions.size;
  const skipped = visited - attempted;
  const remaining = questions.length - visited;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-6 font-sans flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
          <div>
            <h2 className="text-lg font-bold text-blue-700">{userName}</h2>
            <p className="text-sm text-gray-500">{userRole}</p>
          </div>
          <h1 className="text-xl font-semibold text-gray-700">Aptitude Test</h1>
          <span className="text-red-600 font-medium text-lg">
            {formatTime(timeLeft)}
          </span>
        </header>

        {/* Main Layout */}
        <div className="flex gap-6">
          {/* Left: Question Section */}
          <div className="w-3/4 bg-white p-6 rounded-xl shadow-md">
            {!submitted ? (
              <>
                <QuestionCard
                  question={questions[currentQ]}
                  index={currentQ}
                  total={questions.length}
                  selected={selectedAnswers[currentQ]}
                  onAnswer={handleAnswer}
                />

                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={currentQ === 0}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {currentQ < questions.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Test Submitted
                </h2>
                <p className="text-gray-700">
                  You answered {attempted} out of {questions.length} questions.
                </p>
              </div>
            )}
          </div>

          {/* Right: Progress Panel */}
          <div className="w-1/4 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Progress Bar
            </h3>

            {/* Visual Grid of Questions */}
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => {
                const isVisited = visitedQuestions.has(i);
                const isAttempted = selectedAnswers[i] !== undefined;

                let bgColor = "bg-gray-300";
                if (isAttempted) bgColor = "bg-green-500";
                else if (isVisited) bgColor = "bg-red-500";

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentQ(i)}
                    className={`w-10 h-10 rounded-full text-white text-sm font-bold ${bgColor} hover:scale-105 transition`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 text-sm mt-7">
              <div className="flex justify-between">
                <span>✅ Attempted:</span>
                <span>{attempted}</span>
              </div>
              <div className="flex justify-between">
                <span>❌ Skipped:</span>
                <span>{skipped}</span>
              </div>
              <div className="flex justify-between">
                <span>🔲 Remaining:</span>
                <span>{remaining}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
