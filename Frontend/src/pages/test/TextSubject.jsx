import React from "react";
import {
  FaCalculator,
  FaBrain,
  FaBookOpen,
  FaChartPie,
  FaGlobe,
} from "react-icons/fa";

const subjects = [
  {
    id: "quantitative",
    title: "Quantitative Aptitude",
    icon: <FaCalculator size={32} />,
    bgColor: "bg-indigo-600",
    textColor: "text-white",
  },
  {
    id: "logical",
    title: "Logical Reasoning",
    icon: <FaBrain size={32} />,
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    id: "verbal",
    title: "Verbal Ability",
    icon: <FaBookOpen size={32} />,
    bgColor: "bg-yellow-500",
    textColor: "text-gray-900",
  },
  {
    id: "di",
    title: "Data Interpretation",
    icon: <FaChartPie size={32} />,
    bgColor: "bg-red-500",
    textColor: "text-white",
  },
  {
    id: "gk",
    title: "General Knowledge",
    icon: <FaGlobe size={32} />,
    bgColor: "bg-purple-600",
    textColor: "text-white",
  },
];

function TextSubject() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-white shadow rounded-xl p-6 mb-16 flex justify-center">
          <h1 className="text-4xl font-bold text-indigo-700">
            Aptitude Subjects
          </h1>
        </header>

        {/* Subject Buttons */}
        <div className="flex justify-center gap-8 flex-wrap mb-16">
          {subjects.map(({ id, title, icon, bgColor, textColor }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`${bgColor} ${textColor} flex flex-col items-center justify-center rounded-3xl shadow-lg p-8 w-44 h-44 cursor-pointer hover:brightness-110 transition-transform transform hover:scale-105`}
              aria-label={`Go to ${title}`}
            >
              <div className="mb-4">{icon}</div>
              <span className="font-semibold text-center text-lg">{title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextSubject;
