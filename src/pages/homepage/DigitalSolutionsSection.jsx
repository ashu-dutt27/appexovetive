import React from "react";

const DigitalSolutionsSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:py-16 sm:mb-16">
      <div className="text-center mb-8 mx-auto max-w-5xl sm:mb-12">
        <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-4">
          Innovative Digital Solutions Powered by Blockchain, AI, Cloud &amp; Custom Software Excellence
        </h2>
        <p className="text-muted-foreground text-sm sm:text-sm md:text-base max-w-4xl mx-auto mb-8 sm:mb-12">
          Whether it’s blockchain, AI/ML innovation, app and game creation,{" "}
          <a href="/software-development-company" className="text-blue-600 dark:text-blue-400">
            custom software
          </a>
          , advanced analytics or cloud transformation we craft digital experiences that empower your growth and make your ideas stronger, faster, and more meaningful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mx-auto max-w-7xl">
        
        {/* Blockchain Card */}
        <div className="bg-card text-card-foreground card-shadow flex flex-col rounded-lg">
          <div className="p-0 flex flex-col flex-grow space-y-3 px-6 py-8 items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md dark:bg-white/90 transition-all duration-500">
              <img
                alt="Blockchain"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain"
                src="https://img.nadcab.com/wp-content/uploads/2025/11/blockchain.svg?w=3840&q=75"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-base md:text-2xl">Blockchain</h3>
            <p className="text-muted-foreground text-sm sm:text-sm lg:leading-snug">
              We build secure, scalable blockchain solutions from smart contracts and dApps to enterprise-grade integrations that power trust and automation.
            </p>
          </div>
        </div>

        {/* Apps & Games Card */}
        <div className="bg-card text-card-foreground card-shadow flex flex-col rounded-lg">
          <div className="p-0 flex flex-col flex-grow space-y-3 px-6 py-8 items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md dark:bg-white/90 transition-all duration-500">
              <img
                alt="Apps & Games"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain"
                src="https://img.nadcab.com/wp-content/uploads/2025/11/application.svg?w=3840&q=75"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-base md:text-2xl">Apps &amp; Games</h3>
            <p className="text-muted-foreground text-sm sm:text-sm lg:leading-snug">
              We develop high-performance apps and engaging games with stunning{" "}
              <a href="/ui-ux-design" className="text-blue-600">
                UI/UX
              </a>
              , smooth functionality, and seamless cross-platform compatibility.
            </p>
          </div>
        </div>

        {/* Custom Software Card */}
        <div className="bg-card text-card-foreground card-shadow flex flex-col rounded-lg">
          <div className="p-0 flex flex-col flex-grow space-y-3 px-6 py-8 items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md dark:bg-white/90 transition-all duration-500">
              <img
                alt="Custom Software"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain"
                src="https://img.nadcab.com/wp-content/uploads/2025/11/Software.svg?w=3840&q=75"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-base md:text-2xl">Custom Software</h3>
            <p className="text-muted-foreground text-sm sm:text-sm lg:leading-snug">
              We craft tailored, high-performance software that optimizes workflows, boosts efficiency, and scales effortlessly with your business needs.
            </p>
          </div>
        </div>

        {/* AI & ML Card */}
        <div className="bg-card text-card-foreground card-shadow flex flex-col rounded-lg">
          <div className="p-0 flex flex-col flex-grow space-y-3 px-6 py-8 items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md dark:bg-white/90 transition-all duration-500">
              <img
                alt="AI & ML"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain"
                src="https://img.nadcab.com/wp-content/uploads/2025/11/ai.svg?w=3840&q=75"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-base md:text-2xl">AI &amp; ML</h3>
            <p className="text-muted-foreground text-sm sm:text-sm lg:leading-snug">
              We create intelligent AI/ML models that automate tasks, analyze complex data, and deliver smart predictions to improve decision-making and performance.
            </p>
          </div>
        </div>

        {/* Big Data & Analytics Card */}
        <div className="bg-card text-card-foreground card-shadow flex flex-col rounded-lg">
          <div className="p-0 flex flex-col flex-grow space-y-3 px-6 py-8 items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md dark:bg-white/90 transition-all duration-500">
              <img
                alt="Big Data & Analytics"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain"
                src="https://img.nadcab.com/wp-content/uploads/2025/11/big-data.svg?w=3840&q=75"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-base md:text-2xl">Big Data &amp; Analytics</h3>
            <p className="text-muted-foreground text-sm sm:text-sm lg:leading-snug">
              We turn raw data into actionable insights using real-time processing, predictive analytics, and dynamic dashboards for smarter strategic decisions.
            </p>
          </div>
        </div>

        {/* Cloud Services Card */}
        <div className="bg-card text-card-foreground card-shadow flex flex-col rounded-lg">
          <div className="p-0 flex flex-col flex-grow space-y-3 px-6 py-8 items-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-md dark:bg-white/90 transition-all duration-500">
              <img
                alt="Cloud Services"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain"
                src="https://img.nadcab.com/wp-content/uploads/2025/11/cloud.svg?w=3840&q=75"
              />
            </div>
            <h3 className="font-medium text-lg sm:text-base md:text-2xl">Cloud Services</h3>
            <p className="text-muted-foreground text-sm sm:text-sm lg:leading-snug">
              We deliver secure cloud migration, scalable cloud architecture,{" "}
              <a href="/serverless-application-development-services" className="text-blue-600">
                serverless applications
              </a>
              , and{" "}
              <a href="/devops-services" className="text-blue-600">
                DevOps
              </a>{" "}
              automation to accelerate digital transformation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalSolutionsSection;
