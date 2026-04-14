import React from "react";

const DigitalTransformationROI = () => {
  return (
    <section className="py-16 mb-12 bg-[#2A63FB]">
      <div className="px-4 md:px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white lg:leading-snug text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            The ROI of Intelligent Digital Transformation
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 sm:gap-4 gap-8 mb-12 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="flex bg-white text-black flex-col items-center justify-center rounded-lg min-h-[240px]">
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 lg:p-6 flex-1">
              <div className="w-36 h-10 rounded-sm flex mb-2 sm:mb-2.5 items-center justify-center bg-black text-white font-bold gap-2">
                <img
                  src="https://img.nadcab.com/wp-content/uploads/2025/11/efficiency.svg?w=3840&q=75"
                  alt="Efficiency"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <span className="font-normal text-white text-lg">Efficiency</span>
              </div>
              <h3 className="font-medium text-lg sm:text-sm md:text-2xl">
                Intelligent Insights
              </h3>
              <p className="text-sm sm:text-base">
                Transform raw data into real-time intelligence that reduces cost and improves efficiency across mission-critical operations.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-white text-black flex-col items-center justify-center rounded-lg min-h-[240px]">
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 lg:p-6 flex-1">
              <div className="w-36 h-10 rounded-sm flex mb-2 sm:mb-2.5 items-center justify-center bg-black text-white font-bold gap-2">
                <img
                  src="https://img.nadcab.com/wp-content/uploads/2025/11/growth.svg?w=3840&q=75"
                  alt="Growth"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <span className="font-normal text-white text-lg">Growth</span>
              </div>
              <h3 className="font-medium text-lg sm:text-sm md:text-2xl">
                Process Optimization
              </h3>
              <p className="text-sm sm:text-base">
                Automate repetitive workflows, eliminate bottlenecks, and drive measurable productivity gains with AI-powered optimization.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-white text-black flex-col items-center justify-center rounded-lg min-h-[240px]">
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 lg:p-6 flex-1">
              <div className="w-36 h-10 rounded-sm flex mb-2 sm:mb-2.5 items-center justify-center bg-black text-white font-bold gap-2">
                <img
                  src="https://img.nadcab.com/wp-content/uploads/2025/11/innovation.svg?w=3840&q=75"
                  alt="Innovation"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <span className="font-normal text-white text-lg">Innovation</span>
              </div>
              <h3 className="font-medium text-lg sm:text-sm md:text-2xl">Smart Decisions</h3>
              <p className="text-sm sm:text-base">
                Speed up R&D, product design, and testing cycles with{" "}
                <a href="/generative-ai-development-company" className="text-blue-600">
                  generative AI
                </a>{" "}
                and predictive digital twins.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a className="mt-3 link_button" href="/contact">
            Talk to Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationROI;
