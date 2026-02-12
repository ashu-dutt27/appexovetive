// src/components/PortfolioTrust.jsx
import React from "react";

const trustFeatures = [
  {
    icon: "https://img.nadcab.com/wp-content/uploads/2025/09/bitcoin.svg",
    title: "Simplified Bitcoin cross-chain transactions with Kaon’s interoperability layer.",
  },
  {
    icon: "https://img.nadcab.com/wp-content/uploads/2025/09/waves.svg",
    title: "Launched a decentralized Web3 solution for creating and trading memecoins.",
  },
  {
    icon: "https://img.nadcab.com/wp-content/uploads/2025/09/ethereum.svg",
    title: "Built an AI-driven Layer 2 network for intent-centric, cross-chain staking.",
  },
  {
    icon: "https://img.nadcab.com/wp-content/uploads/2025/09/litecoin.svg",
    title: "Enabled secure crypto UPI transactions and utility payments through a unified app.",
  },
];

const PortfolioTrust = () => {
  return (
    <section className="bg-card mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:py-24 py-12 px-5 items-center bg-card rounded-lg">

          {/* Text Section */}
          <div className="block">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-4xl lg:leading-snug font-bold">
                The Trusted Tech Partner of Web3 Pioneers
              </h2>
            </div>
            <p className="text-xl [&_a]:text-blue-600 [&_a:hover]:underline">
              Nadcab Labs empowers 25,000+ blockchain projects.
            </p>
          </div>

          {/* Features Section */}
          <div className="flex flex-col gap-4">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/20 shadow-sm">
                  <img
                    alt="icon"
                    src={feature.icon}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed font-medium [&_a]:text-blue-600 [&_a:hover]:underline">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioTrust;
