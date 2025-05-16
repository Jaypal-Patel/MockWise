import React from "react";

function QuestionCard({ question, index, total, selected, onAnswer }) {
  const labels = ["a", "b", "c", "d"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Q{index + 1}/{total}: {question.text}
      </h3>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          const isSelected = selected === opt;
          return (
            <button
              key={i}
              onClick={() => onAnswer(index, opt)}
              className={`w-full text-left flex items-center gap-2 px-4 py-2 border rounded-md 
                ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100"
                }`}
            >
              <span className="font-bold uppercase">{labels[i]}.</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
