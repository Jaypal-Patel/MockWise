import React from "react";
import { FaBrain, FaCode, FaLaptopCode, FaUserTie } from "react-icons/fa";

function FeatureSection() {
  const features = [
    {
      title: "Aptitude Test",
      description:
        "Sharpen your logical, verbal, and quantitative reasoning skills.",
      icon: <FaBrain size={32} className="text-blue-600" />,
    },
    {
      title: "Technical Test",
      description:
        "Test your knowledge in core CS subjects like DBMS, OS, and Networking.",
      icon: <FaLaptopCode size={32} className="text-green-600" />,
    },
    {
      title: "Coding Test",
      description:
        "Solve real-world programming problems with hands-on practice.",
      icon: <FaCode size={32} className="text-purple-600" />,
    },
    {
      title: "Mock Interview",
      description:
        "Practice interviews to build confidence and improve communication skills.",
      icon: <FaUserTie size={32} className="text-yellow-600" />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-100 via-white to-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Test Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Prepare efficiently with well-structured tests and real interview
          simulations.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-blue-50 transition p-6 rounded-2xl shadow-md text-left"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
