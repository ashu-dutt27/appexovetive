const Industry = () => {
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT IMAGE CARD */}
          <div className="col-span-5">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">
                Blockchain Use Cases <br /> in Major Industries
              </h3>

              <img
                src="https://img.nadcab.com/wp-content/uploads/2024/04/blockchain-use-case.webp"
                alt="Industries"
                className="rounded-lg mt-4 w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Industry Solutions
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Tailored technology solutions for various industries to drive
                growth and innovation.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-7">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Browse Industries
            </h2>
            <p className="text-gray-600 mb-6">
              Discover tailored solutions for your industry with our specialized
              expertise.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                "Entertainment",
                "Education",
                "Transport & Logistics",
                "Supply Chain",
                "Health Care",
                "BFSI",
                "Procure to Pay",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 transition rounded-lg px-4 py-3 cursor-pointer"
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

export default Industry;
