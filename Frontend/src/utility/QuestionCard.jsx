import React from "react";

const optionLabels = ["a", "b", "c", "d"];

function QuestionCard({ question, index, total, selected, onAnswer }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Q{index + 1}/{total}:{" "}
        <span className="text-gray-800">{question.text}</span>
      </h3>
      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === opt;
          return (
            <button
              key={i}
              onClick={() => onAnswer(index, opt)}
              className={`flex items-center w-full text-left px-4 py-3 rounded-xl border 
                ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-700"
                    : "bg-gray-50 text-gray-800 hover:bg-blue-50"
                } 
                transition duration-200 shadow-sm`}
            >
              <span className="mr-3 font-bold text-lg text-blue-700">
                {optionLabels[i]}.
              </span>
              <span className="text-base">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
