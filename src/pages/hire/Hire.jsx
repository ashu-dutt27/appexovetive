const Hire = () => {
  const roles = [
    "Application Developers",
    "UI/UX Designer",
    "Frontend Developers",
    "Backend Developers",
    "Blockchain Developers",
    "Smart Contract Developers",
    "ML Engineer",
    "LLM Engineer",
    "DevOps Engineers",
    "Game Developers",
    "E-commerce Developers",
  ];

  return (
    <div className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT IMAGE CARD */}
          <div className="col-span-5">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://img.nadcab.com/wp-content/uploads/2024/04/hire-developers.webp"
                alt="Hire Developers"
                className="w-full h-[220px] object-cover rounded-xl"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Hire Top Developers
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Access vetted developers to scale your team with quality
                code and innovative solutions.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-7">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Hire Skilled Professionals
            </h2>
            <p className="text-gray-600 mb-6">
              Access skilled developers across various technologies and domains.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 transition rounded-lg px-5 py-4 cursor-pointer"
                >
                  <p className="text-sm font-medium text-gray-800">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hire;
