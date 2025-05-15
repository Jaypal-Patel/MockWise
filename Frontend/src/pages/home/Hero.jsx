import React from "react";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-white flex items-center justify-center px-6 md:px-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Ace Your Next Interview <br /> with{" "}
            <span className="text-blue-600">PrepZone</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Practice Aptitude, Technical, and Coding tests. Prepare with mock
            interviews and get certified to boost your placement chances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
              Get Started
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition duration-300">
              Explore Tests
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="./hero.jpg"
            alt="HR Interview Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
