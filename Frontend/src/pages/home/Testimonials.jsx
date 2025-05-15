import React from "react";

function Testimonials() {
  const feedback = [
    {
      quote: "This platform helped me crack my placement test with confidence!",
      name: "Aayushi",
      role: "CS Student",
      image: "./jp.jpg",
      bg: "bg-blue-50",
      textColor: "text-blue-600",
      rating: 5,
    },
    {
      quote: "Mock interviews felt like real ones – super helpful feedback.",
      name: "Ravi",
      role: "ECE Graduate",
      image: "./riya.jpg",
      bg: "bg-green-50",
      textColor: "text-green-600",
      rating: 4,
    },
    {
      quote:
        "After completing all tests, I got a certificate that really boosted my resume.",
      name: "Priya",
      role: "IT Fresher",
      image: "./abc.webp",
      bg: "bg-yellow-50",
      textColor: "text-yellow-600",
      rating: 5,
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < count ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-100 via-white to-white">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
        What Our Students Say
      </h3>
      <p className="text-center text-gray-600 mb-12">
        Hear how PrepZone is helping students achieve their career goals! 🌟
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {feedback.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-6 rounded-2xl shadow-md flex flex-col justify-between h-full`}
          >
            <p className="text-gray-700 italic mb-6 flex-grow">
              "{item.quote}"
            </p>
            <div className="flex items-center justify-between mt-auto gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <p className={`font-semibold ${item.textColor}`}>
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 text-lg flex-shrink-0">
                {renderStars(item.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
