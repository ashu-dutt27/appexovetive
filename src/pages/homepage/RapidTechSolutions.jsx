import React from "react";

const RapidTechSolutions = () => {
  return (
    <section className="py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-medium dark:text-white leading-tight max-w-5xl mx-auto">
            Transforming Solutions with Leading-Edge, Rapid Technologies
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 sm:gap-6 sm:min-h-[800px]">
          {/* Left Sticky Card */}
          <div className="sm:sticky sm:top-24 h-fit">
            <div className="text-card-foreground card-shadow bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 border-0 shadow-2xl shadow-blue-500/30 rounded-3xl overflow-hidden transition-all duration-500">
              <div className="flex flex-col items-center text-center p-6 sm:p-12 gap-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 w-full">
                  <p className="text-xl sm:text-3xl font-bold">
                    1600+ Experts Delivering Transformation at Speed
                  </p>
                </div>
                <div className="text-xl leading-relaxed text-blue-100 max-w-xl">
                  Innovation at Lightning Speed
                </div>
                <a
                  className="mt-4 px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 w-full justify-center max-w-xs"
                  href="/contact"
                >
                  <span>Boost Your Innovation</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Scrollable Cards */}
          <div className="space-y-4 sm:overflow-y-scroll sm:max-h-[800px] hide-scrollbar px-2">
            {/* Blockchain */}
            <div className="bg-card text-card-foreground card-shadow flex items-start gap-4 sm:gap-6 px-4 sm:px-8 py-4 rounded-xl transition">
              <div className="w-12 h-12 mt-1 flex-shrink-0 flex items-center justify-center"></div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Blockchain</h4>
                <p className="text-sm sm:text-base leading-relaxed [&_a]:text-blue-600">
                  We leverage{" "}
                  <a href="/blockchain-development-company">blockchain</a> to create secure, transparent, and decentralized solutions, optimizing transactions, data integrity, and trust across business operations.
                </p>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="bg-card text-card-foreground card-shadow flex items-start gap-4 sm:gap-6 px-4 sm:px-8 py-4 rounded-xl transition">
              <div className="w-12 h-12 mt-1 flex-shrink-0 flex items-center justify-center"></div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Artificial Intelligence
                </h4>
                <p className="text-sm sm:text-base leading-relaxed [&_a]:text-blue-600">
                  We use{" "}
                  <a href="/ai-application-developers">AI</a> to develop intelligent solutions that enhance automation, improve decision-making, and deliver actionable insights for better business outcomes.
                </p>
              </div>
            </div>

            {/* Smart Contracts */}
            <div className="bg-card text-card-foreground card-shadow flex items-start gap-4 sm:gap-6 px-4 sm:px-8 py-4 rounded-xl transition">
              <div className="w-12 h-12 mt-1 flex-shrink-0 flex items-center justify-center"></div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Smart Contracts</h4>
                <p className="text-sm sm:text-base leading-relaxed [&_a]:text-blue-600">
                  We design and deploy automated{" "}
                  <a href="/smart-contract-developers">smart contracts</a> that streamline processes, reduce intermediaries, and ensure accuracy and efficiency in digital workflows.
                </p>
              </div>
            </div>

            {/* AI-Powered Analytics */}
            <div className="bg-card text-card-foreground card-shadow flex items-start gap-4 sm:gap-6 px-4 sm:px-8 py-4 rounded-xl transition">
              <div className="w-12 h-12 mt-1 flex-shrink-0 flex items-center justify-center"></div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  AI-Powered Analytics
                </h4>
                <p className="text-sm sm:text-base leading-relaxed [&_a]:text-blue-600">
                  By combining AI with blockchain data, we analyze complex datasets, predict trends, and generate insights that drive strategic and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-20">
          <div className="rounded-xl bg-card text-card-foreground card-shadow max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row sm:flex-row">
              {/* Left Text */}
              <div className="w-full lg:w-7/12 flex items-center dark:bg-white dark:text-black dark:shadow-none">
                <div className="p-6 lg:p-8 space-y-3">
                  <h4 className="font-medium text-xl sm:text-xl md:text-3xl">
                    Pioneering the AI-Native Future with Apexovative
                  </h4>
                  <p className="text-base sm:text-sm [&_a]:text-blue-600">
                    The future of business is intelligent, leveraging AI, from LLMs to MLOps, with our certified experts and customized solutions.
                  </p>
                  <div className="pt-2">
                    <a className="link_button_blue" href="/contact">
                      Schedule an AI Consultation
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full lg:w-5/12 h-72">
                <img
                  src="https://img.nadcab.com/wp-content/uploads/2025/11/ai-native.webp?w=3840&q=75"
                  alt="AI-Native Future with Apexovative"
                  loading="lazy"
                  className="object-cover w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidTechSolutions;
