import React from "react";

const locations = [
  {
    name: "Hyderabad",
    country: "India",
    address: "3rd Floor, Oyster Complex Greenlands Road Somajiguda, Begumpet, Hyderabad, Telangana 500016",
    phone: "88404 90443",
    img: "https://img.nadcab.com/wp-content/uploads/2025/11/heydrabad.webp?w=750&q=75",
    map: "https://maps.app.goo.gl/dtPoDCcof7iG8NB67",
  },
  {
    name: "New York",
    country: "USA",
    address: "740 E 13th St, New York, NY 10009, United States",
    phone: "+1 646-665-9735",
    img: "https://img.nadcab.com/wp-content/uploads/2025/11/usa.webp?w=750&q=75",
    map: "https://maps.app.goo.gl/2GX5hYA5ZnQC6FKu9",
  },
  {
    name: "Sydney",
    country: "Australia",
    address: "38-52 Waterloo St, Surry Hills NSW 2010, Australia",
    phone: "+61 488 841 730",
    img: "https://img.nadcab.com/wp-content/uploads/2025/11/australia.webp?w=750&q=75",
    map: "https://maps.app.goo.gl/eSaykknKGyV6T3UZA",
  },
  {
    name: "Canada",
    country: "Canada",
    address: "",
    phone: "",
    img: "https://img.nadcab.com/wp-content/uploads/2025/11/canada.webp?w=750&q=75",
    map: "#",
  },
  {
    name: "London",
    country: "UK",
    address: "23 New Drum St, London E1 7AY, United Kingdom",
    phone: "+44 7453379563",
    img: "https://img.nadcab.com/wp-content/uploads/2025/11/uk.webp?w=750&q=75",
    map: "https://maps.app.goo.gl/459anSuNufgd7sfF9",
  },
  {
    name: "UAE",
    country: "UAE",
    address: "",
    phone: "",
    img: "https://img.nadcab.com/wp-content/uploads/2025/11/uae.webp?w=750&q=75",
    map: "#",
  },
];

const awards = [
  "https://img.nadcab.com/wp-content/uploads/2025/11/clutch-global-fall-2023-1.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/top_clutch.co_smart_contract_development_company_india_2025-2.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/top_the_manifest_smart_contract_development_company_india_2024_award-2.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/top_the_manifest_blockchain_company_india_2024_award-2.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/11/resizecom_top-blockchain-development-companies_Badge6-1-2.webp?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/TB-Trusted-on-white.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/software-development-companies-round-square-badge-2.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/badge-company-2.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/11/highly-recommended.webp?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/11/best-value-software-world.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/10/list-blockchain-technology-companies.svg?w=256&q=75",
  "https://img.nadcab.com/wp-content/uploads/2025/11/clutch-top-blockchain-company-1.svg?w=256&q=75",
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-foreground">
      {/* Global Presence */}
      <section className="relative w-full overflow-hidden bg-[#1E1E1E]">
        <div className="container w-full py-12 lg:py-16 mx-auto lg:px-4">
          <h2 className="text-white text-3xl lg:text-4xl text-center lg:text-start">
            Our Global Presence
          </h2>

          {/* Filter Buttons + Arrows */}
          <div className="flex justify-between items-center mt-5 px-4 lg:px-0 flex-wrap lg:flex-nowrap gap-4">
            <div className="flex flex-wrap lg:gap-2 sm:gap-1">
              {["All", "India", "USA", "Australia", "Canada", "UK", "UAE"].map(
                (country) => (
                  <h3
                    key={country}
                    className={`py-2 px-6 text-sm rounded-xl transition-colors duration-200 m-2 cursor-pointer ${
                      country === "All"
                        ? "bg-blue-800 text-white border-none"
                        : "border border-gray-700 text-white hover:bg-blue-800 hover:border-blue-800"
                    }`}
                  >
                    {country}
                  </h3>
                )
              )}
            </div>

            <div className="flex gap-3">
              <button className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center transition-colors shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center transition-colors shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Location Cards */}
          <div className="flex lg:gap-4 sm:gap-3 gap-3 mt-5 overflow-x-auto scroll-smooth -mx-2 px-2">
            {locations.map((loc) => (
              <a
                href={loc.map}
                target="_blank"
                rel="noopener noreferrer"
                key={loc.name}
                className="flex-[0_0_300px] sm:flex-[0_0_50%] md:flex-[0_0_25%] xl:flex-[0_0_25%] mx-2"
              >
                <div className="relative w-[300px] h-[300px] lg:w-[355px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300">
                  <img
                    alt={loc.name}
                    className="object-cover w-full h-full transition-transform duration-300"
                    src={loc.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-medium text-white drop-shadow-2xl">
                      {loc.name}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600 transition-transform transition-opacity duration-700 ease-in-out translate-x-full opacity-0 hover:translate-x-0 hover:opacity-100">
                    <div className="flex flex-col justify-between p-6 lg:p-10 h-full relative">
                      <div className="space-y-2 mt-auto relative text-white">
                        <p className="text-base font-semibold uppercase tracking-wide">
                          {loc.country}
                        </p>
                        <div>
                          <h4 className="text-xl lg:text-3xl font-bold tracking-tight">
                            {loc.name}
                          </h4>
                          {loc.address && <p className="text-sm">{loc.address}</p>}
                          {loc.phone && <p className="text-sm">{loc.phone}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <div className="container mx-auto px-6 lg:px-0 lg:pb-8 text-center lg:text-left my-8">
        <div className="h-[1px] w-full mb-6 lg:my-6 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div className="flex flex-wrap items-center gap-3 justify-center max-w-7xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center"
            >
              <img alt="Award" src={award} width={80} height={90} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Social + Contact */}
      <div className="container mx-auto px-6 lg:px-0 mb-6 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
        <div className="flex items-center gap-4 justify-center flex-wrap">
          {[
            { href: "https://www.facebook.com/nadcablabs", alt: "Facebook" },
            { href: "https://x.com/nadcablabs", alt: "X" },
            { href: "https://www.youtube.com/@nadcablab", alt: "YouTube" },
            { href: "https://www.instagram.com/nadcablabs", alt: "Instagram" },
            { href: "https://www.linkedin.com/company/nadcablabs", alt: "LinkedIn" },
          ].map((social, idx) => (
            <a
              href={social.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={social.alt}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                alt={social.alt}
                width={24}
                height={24}
                className="dark:invert"
                src={`https://img.nadcab.com/wp-content/uploads/2025/10/${social.alt.toLowerCase()}.svg?w=48&q=75`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
