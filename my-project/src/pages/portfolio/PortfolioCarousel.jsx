import React from "react";

const portfolioItems = [
  {
    title: "Athene Network",
    description:
      "Athene Network envisions a world where artificial intelligence and blockchain together redefine the foundations of our digital and social landscapes.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/06/athene.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/06/athene-logo.webp?w=384&q=75",
    link: "https://www.nadcab.com/case-study/athene-network-mining-app-development",
    bgColor: "bg-[#226c59]",
  },
  {
    title: "Everscale Network",
    description:
      "Everscale is a scalable blockchain network handling 100,000+ transactions per second using dynamic sharding and multithreading for fast performance.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/06/EVERSCALE-BRANDIMAGE.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/06/everscale_logo.webp?w=384&q=75",
    link: "https://www.nadcab.com/case-study/everscale-network-blockchain-ecosystem",
    bgColor: "bg-[#4842a8]",
  },
  {
    title: "Metatime Explorer",
    description:
      "Test Metatime Explorer offers intuitive blockchain access, simplifying transactions, smart contracts, and dApps with sleek design and unmatched transparency.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/METATIME-BRANDIMAGE.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/metatime-bloacl-logo.webp?w=640&q=75",
    link: "https://www.nadcab.com/case-study/metatime-explorer-ecosystem",
    bgColor: "bg-[#f90979]",
  },
  {
    title: "EverRise Blockchain",
    description:
      "EverRise is a blockchain firm enhancing DeFi access through secure, multi-chain solutions. Start building your DeFi project with EverRise today.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/everrise-brandimage.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/everrise-logo.webp?w=640&q=75",
    link: "https://www.nadcab.com/case-study/everrise",
    bgColor: "bg-[#ffa600]",
  },
  {
    title: "MerkleScan Explorer",
    description:
      "Merkle Scan Explorer delivers real-time insights on Future Smart Chain, offering high TPS, smart contract tracking, and user-friendly analytics.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/MERKLE-CHAIN-BRANDIMAGE.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/merklechain-logo.webp?w=640&q=75",
    link: "https://www.nadcab.com/case-study/merklechain-explorer",
    bgColor: "bg-[#6c75d1]",
  },
  {
    title: "O3 Swap Defi Platform",
    description:
      "O3 Swap is a DeFi platform enabling seamless cross-chain swaps, improving liquidity and user experience across multiple blockchain networks.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/Q3-brandimage.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/log1o.png?w=640&q=75",
    link: "https://www.nadcab.com/case-study/o3swap",
    bgColor: "bg-[#11bf5c]",
  },
  {
    title: "Phantasma Blockchain Ecosystem",
    description:
      "Phantasma is a scalable blockchain ecosystem offering DApps, wallets, NFTs, AI tools, Explorer and secure solutions for developers and users.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/Phantasma.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/phantasma-logo-white.webp?w=750&q=75",
    link: "https://www.nadcab.com/case-study/phantasma",
    bgColor: "bg-[#17b1e7]",
  },
  {
    title: "SEEDx Decentralised Exchange",
    description:
      "SEEDx is a powerful DeFi platform featuring Exchange, Swap, Launchpad, Governance, Drop Zone, Wallet Connect, and Scratch Rewards system.",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/Seedx-1.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/Seedx-1.webp?w=640&q=75",
    link: "https://www.nadcab.com/case-study/seedx",
    bgColor: "bg-[#ffaa2b]",
  },
  {
    title: "Tarality Blockchain Ecosystem",
    description:
      "We know the crypto world can feel like a rollercoaster, but we're here to make the ride smooth and exciting. Join us today and lead the way to financial freedom!",
    image: "https://img.nadcab.com/wp-content/uploads/2025/05/Tarality-1.webp?w=3840&q=75",
    logo: "https://img.nadcab.com/wp-content/uploads/2025/05/tarality-logo.webp?w=640&q=75",
    link: "https://www.nadcab.com/case-study/tarality",
    bgColor: "bg-[#8b363c]",
  },
];

const PortfolioCarousel = () => {
  return (
    <div className="relative max-w-7xl w-full mx-auto flex items-center justify-center group lg:px-4">
      {/* Carousel Buttons */}
      <button className="absolute left-4 md:left-12 z-30 w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white hover:bg-slate-800/80 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-slate-700/50 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18L9 12l6-6" />
        </svg>
      </button>
      <button className="absolute right-4 md:right-12 z-30 w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white hover:bg-slate-800/80 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-slate-700/50 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Carousel Items */}
      <div className="overflow-hidden w-full">
        <div className="flex">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] lg:p-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 min-h-[80vh] md:min-h-[500px] w-full mx-auto overflow-hidden rounded-3xl">
                <div className={`${item.bgColor} p-4 md:p-8 h-full flex items-center justify-center rounded-3xl overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-3xl"
                  />
                </div>
                <div
                  className={`${item.bgColor} p-8 md:p-12 flex flex-col justify-center text-white h-full`}
                >
                  <div className="space-y-6 max-w-xl">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 line-clamp-2 transition-colors">
                        {item.title}
                      </h2>
                    </a>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <p className="text-base md:text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity">
                        {item.description}
                      </p>
                    </a>
                    <div className="flex items-center gap-3 pt-4">
                      <div className="relative w-52 h-14 overflow-hidden">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={item.logo}
                            alt={`${item.title} logo`}
                            className="object-contain w-full h-full"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
