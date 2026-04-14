import React from "react";

const Excellence = () => {
  return (
    <section className="bg-[#0B0B0D] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h4 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 max-w-4xl mx-auto lg:leading-snug">
            Recognized Excellence Across Leading Platforms
          </h4>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            With top-rated reviews on major industry platforms, Nadcab Labs stands
            as a trusted name in blockchain innovation. Our consistent track record
            of delivering scalable, secure, and future-ready solutions has made us
            the preferred technology partner for startups and enterprises worldwide.
          </p>
        </div>

        {/* Ratings Grid */}
        <div className="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-1 gap-4">
          {ratings.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1C] flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl shadow-lg hover:bg-[#222225] transition-all duration-300"
            >
              <div className="text-center sm:text-left mb-2 sm:mb-0">
                <p className="text-base sm:text-lg font-semibold text-white">
                  {item.score}
                </p>
                <div className="flex justify-center sm:justify-start mt-1">
                  <img
                    src={item.stars}
                    alt={item.starAlt}
                    width={80}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-end">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  width={50}
                  height={20}
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ratings = [
  {
    score: "5.0/5",
    stars: "https://img.nadcab.com/wp-content/uploads/2025/11/5star.webp",
    starAlt: "5 star rating",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/11/clutch-1.webp",
    logoAlt: "Clutch",
    link: "https://clutch.co/profile/nadcab-labs",
  },
  {
    score: "4.9/5",
    stars: "https://img.nadcab.com/wp-content/uploads/2025/11/4.9-Star-Rating.webp",
    starAlt: "4.9 star rating",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/11/ambition-box.webp",
    logoAlt: "Ambition Box",
    link: "https://www.ambitionbox.com/overview/nadcab-technology-overview",
  },
  {
    score: "5.0/5",
    stars: "https://img.nadcab.com/wp-content/uploads/2025/11/5star.webp",
    starAlt: "5 star rating",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/11/good-firm.webp",
    logoAlt: "GoodFirms",
    link: "https://www.goodfirms.co/company/nadcab-technology",
  },
  {
    score: "4.9/5",
    stars: "https://img.nadcab.com/wp-content/uploads/2025/11/4.9-Star-Rating.webp",
    starAlt: "4.9 star rating",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/11/glassdoor.webp",
    logoAlt: "Glassdoor",
    link: "https://www.glassdoor.co.in/Overview/Working-at-Nadcab-Labs-EI_IE5101739.11,22.htm",
  },
];

export default Excellence;