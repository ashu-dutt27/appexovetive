// src/components/PortfolioCards.jsx
import React from "react";

const PortfolioCards = () => {
  const caseStudies = [
    {
      title: "RoninChain",
      href: "/case-study/roninchain-blockchain-for-gaming",
      img: "https://img.nadcab.com/wp-content/uploads/2025/09/ronin-casestudy-707x1024.webp",
    },
    {
      title: "Open Campus",
      href: "/case-study/open-campus-blockchain-education",
      img: "https://img.nadcab.com/wp-content/uploads/2025/10/open-campus-case-study-2-copy-1024x768.webp",
    },
    {
      title: "Athene Network",
      href: "/case-study/athene-network-mining-app-development",
      img: "https://img.nadcab.com/wp-content/uploads/2025/06/athene-network-two-707x1024.webp",
    },
    {
      title: "Everscale Network",
      href: "/case-study/everscale-network-blockchain-ecosystem",
      img: "https://img.nadcab.com/wp-content/uploads/2025/06/Everscale-Network-707x1024.webp",
    },
    {
      title: "Metatime Explorer",
      href: "/case-study/metatime-explorer-ecosystem",
      img: "https://img.nadcab.com/wp-content/uploads/2025/05/Metatime-ecosystem-707x1024.webp",
    },
    {
      title: "EverRise Blockchain",
      href: "/case-study/everrise",
      img: "https://img.nadcab.com/wp-content/uploads/2025/05/everrise-707x1024.webp",
    },
    {
      title: "MerkleScan Explorer",
      href: "/case-study/merklechain-explorer",
      img: "https://img.nadcab.com/wp-content/uploads/2025/05/mercle-chain-707x1024.webp",
    },
    {
      title: "O3 Swap Defi Platform",
      href: "/case-study/o3swap",
      img: "https://img.nadcab.com/wp-content/uploads/2025/05/o3-707x1024.webp",
    },
  ];

  const categories = [
    "All",
    "Blockchain",
    "Web3",
    "Artificial Intelligence",
    "Brand",
    "DApp",
    "Wallet",
    "Crypto Exchange",
    "Coin & Token",
    "Defi",
    "DAO",
    "NFT",
    "DEXs",
    "Metaverse",
    "Arbitrage",
    "Crypto Wallet",
  ];

  return (
    <section className="px-4 sm:px-0" id="case-studies-wrapper">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center pb-5 pt-16 lg:leading-snug">
        From wallets to DeFi, our work says it all. <br />
        Explore the stories behind each solution
      </h2>

      {/* Category Tabs */}
      <nav
        className="max-w-7xl mx-auto py-6 md:py-8 lg:py-10 border-b border-gray-200 dark:border-gray-700"
        role="tablist"
        aria-label="Case study categories"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === 0 ? "true" : "false"}
              aria-controls="case-studies-content"
              className={`py-2.5 px-5 sm:py-3 sm:px-6 text-sm sm:text-base font-medium rounded-full transition-all duration-200 whitespace-nowrap min-h-[44px] flex items-center justify-center ${
                index === 0
                  ? "bg-[#0092ff2e] text-[#0092ff] shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Case Study Cards */}
      <div
        id="case-studies-content"
        role="tabpanel"
        className="max-w-7xl mx-auto py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-[1600px] mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <a
              key={index}
              href={caseStudy.href}
              className="group focus:outline-none focus:ring-2 focus:ring-[#0092ff] focus:ring-offset-2 rounded-xl"
            >
              <article className="relative aspect-[3/4] w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-2xl bg-gray-100 dark:bg-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  role="img"
                  aria-label={caseStudy.title}
                  style={{ backgroundImage: `url(${caseStudy.img})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                  <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-snug line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {caseStudy.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-10 md:mt-12 lg:mt-16">
          <button className="relative px-8 py-3.5 bg-black hover:bg-black/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium text-sm sm:text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl min-w-[160px] min-h-[48px] flex items-center justify-center gap-2">
            <span>Load More</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCards;
