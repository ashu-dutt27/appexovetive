import { useState } from "react";

const servicesData = {
  Blockchain: [
    "Blockchain Development",
    "Token & Coin",
    "Cryptocurrency Exchange",
    "Smart Contract",
    "DeFi Development",
    "Asset Tokenization",
    "NFT Marketplace",
    "Cryptocurrency Wallet",
    "Cryptocurrency MLM",
    "DePIN Development",
    "Web3 Development",
    "Tier-1 Exchange Listing",
  ],
  "Apps & Games": [
    "Mobile App Development",
    "Web App Development",
    "Game Development",
    "Cross Platform Apps",
  ],
  "AI & ML": [
    "AI Development",
    "Machine Learning",
    "Chatbot Development",
    "Computer Vision",
  ],
  "Custom Software": [
    "Enterprise Software",
    "CRM Development",
    "ERP Solutions",
    "SaaS Development",
  ],
  "Big Data & Analytics": [
    "Data Engineering",
    "Data Analytics",
    "Business Intelligence",
  ],
  "Cloud Services": [
    "AWS Services",
    "Azure Services",
    "Cloud Migration",
    "DevOps",
  ],
};

const Service = () => {
  const [activeService, setActiveService] = useState("Blockchain");

  return (
    <div className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">

          {/* LEFT MENU */}
          <div className="w-64 border-r border-gray-200">
            {Object.keys(servicesData).map((item) => (
              <div
                key={item}
                onMouseEnter={() => setActiveService(item)}
                className={`px-4 py-3 mb-1 rounded-lg cursor-pointer font-medium transition
                  ${
                    activeService === item
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              End-to-end {activeService} solutions
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {servicesData[activeService].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600
                  px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Service;
