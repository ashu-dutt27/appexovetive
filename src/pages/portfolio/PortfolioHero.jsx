// src/components/Portfolio.jsx
import React from "react";

const PortfolioHero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center pt-10">
        
        {/* Text Section */}
        <div className="space-y-6 sm:space-y-8 order-1 lg:order-1 text-center lg:text-left max-w-full mx-auto lg:mx-0">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl lg:leading-snug">
            Blockchain & Web3 Project Developed by us!
          </h1>
          <p className="text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed">
            Apexovative empowers 25,000+ blockchain projects, enhancing functionality and aesthetics.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="#case-studies-wrapper"
              className="inline-flex px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-1 w-full order-2 lg:order-2">
          <div className="relative w-full h-56 sm:h-80 md:h-96 lg:h-[510px]">
            <video
              src="https://img.nadcab.com/wp-content/uploads/2025/07/compressed-video.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              poster="/ai-blockchain-poster.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioHero;
