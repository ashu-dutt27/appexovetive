import React from "react";

const Business = () => {
  return (
    <section className="py-20 px-4 lg:mb-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h5 className="gradient-text text-xl sm:text-2xl md:text-4xl font-medium mb-4 leading-snug mx-auto">
            Apexovative Brings Transformation for Global Businesses
          </h5>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          <p className="text-xl md:text-lg leading-relaxed my-6 max-w-5xl">
            Starting from understanding your business challenges to delivering
            precise, high-performance solutions, we ensure every project follows
            industry-specific standards. Our team blends technical expertise,
            development excellence, and deep research to build solutions that help
            businesses scale smarter and faster.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-card text-card-foreground card-shadow group relative backdrop-blur-sm p-6 dark:bg-white dark:text-black"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-4 items-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="object-contain"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col text-center lg:text-left">
                  <div className="text-3xl font-semibold text-black group-hover:scale-110 transition-transform duration-500">
                    {item.value}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const stats = [
  {
    value: "198+",
    label: "Apps Developed",
    alt: "apps developed",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/apps-developed.svg",
  },
  {
    value: "250+",
    label: "Developers",
    alt: "developers",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/developers.svg",
  },
  {
    value: "685+",
    label: "Website Designed",
    alt: "website designed",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/website-designed.svg",
  },
  {
    value: "140+",
    label: "Game Developed",
    alt: "game developed",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/game-developed.svg",
  },
  {
    value: "60+",
    label: "AI & IOT Solutions",
    alt: "AI",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/artificial.svg",
  },
  {
    value: "1500+",
    label: "Happy Clients",
    alt: "happy clients",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/happy-clients.svg",
  },
  {
    value: "120+",
    label: "Salesforce Solutions",
    alt: "salesforce",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/salesforce.svg",
  },
  {
    value: "40+",
    label: "Data Science",
    alt: "data science",
    icon: "https://img.nadcab.com/wp-content/uploads/2025/11/data-science.svg",
  },
];

export default Business;