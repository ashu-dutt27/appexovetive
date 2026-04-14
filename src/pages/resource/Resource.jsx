const Resource = () => {
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT IMAGE CARD */}
          <div className="col-span-5">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://img.nadcab.com/wp-content/uploads/2024/04/resources.webp"
                alt="Resources"
                className="w-full h-[220px] object-cover rounded-xl"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Explore Our Resources
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Access valuable insights, tutorials, and industry knowledge to
                stay ahead in technology and business.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-7">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Browse Resources
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our comprehensive collection of insights, tutorials, and
              industry knowledge.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Freshwork",
                "Blog",
                "Podcast",
                "Press Release",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 transition rounded-lg px-5 py-4 cursor-pointer"
                >
                  <p className="text-sm font-medium text-gray-800">
                    {item}
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

export default Resource;
