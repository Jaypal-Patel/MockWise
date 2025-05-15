import React from "react";

function RankCard() {
  const topStudents = [
    {
      rank: 1,
      name: "Aman Sharma",
      branch: "CS Student",
      emoji: "🥇",
      city: "Indote",
      image: "./jp.jpg",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-400",
    },
    {
      rank: 2,
      name: "Riya Verma",
      branch: "IT Graduate",
      emoji: "🥈",
      city: "Indote",
      image: "./riya.jpg",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-400",
    },
    {
      rank: 3,
      name: "Karan Mehta",
      branch: "EC Fresher",
      emoji: "🥉",
      city: "Indote",
      image: "./abc.webp",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-400",
    },
  ];

  // Helper to return emoji size class based on rank
  const getEmojiSize = (rank) => {
    if (rank === 1) return "text-6xl";
    if (rank === 2) return "text-5xl";
    return "text-4xl";
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-100 via-white to-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Performers
        </h2>
        <p className="text-gray-600 mt-2">
          Celebrating excellence in PrepZone tests!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {topStudents.map((student) => (
          <div
            key={student.rank}
            className={`flex items-center justify-between gap-6 p-8 rounded-2xl shadow-md border-2 ${student.bgColor} ${student.borderColor}`}
          >
            {/* Left Content */}
            <div className="flex-1">
              <div className={`mb-2 ${getEmojiSize(student.rank)}`}>
                {student.emoji}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {student.name}
              </h3>
              <p className="text-gray-600 text-sm">{student.branch}</p>
              <p className="text-gray-600 text-sm">{student.city}</p>
            </div>

            {/* Right Image */}
            <img
              src={student.image}
              alt={student.name}
              className="w-35 h-35 rounded-full object-cover border-4 border-white shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RankCard;
