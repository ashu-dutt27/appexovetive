import React from "react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "RoninChain",
      date: "Sep 12, 2025",
      description:
        "Wondering how to build a Layer-1 blockchain for gaming? Apexovative developed RoninChain for Web3 games. Read full case study.",
      image: "https://img.nadcab.com/wp-content/uploads/2025/10/Ronin_casestudy.webp",
      link: "/case-study/roninchain-blockchain-for-gaming",
    },
    // Add more case studies here as needed
  ];

  return (
    <section className="py-10 sm:py-14 px-4">
      <div className="text-center mb-10 sm:mb-8">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-[2.5rem] font-medium mx-auto mb-2 max-w-4xl">
          Case Studies That Showcase Real Impact
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          Explore how our blockchain solutions have driven measurable success
          for clients across diverse industries.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto rounded-2xl bg-card card-shadow overflow-hidden">
        {caseStudies.map((caseStudy, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center p-0 pt-0"
          >
            {/* Image */}
            <div className="relative w-full sm:w-5/12 md:w-4/12 lg:w-5/12 h-64 sm:h-80 md:h-[380px] lg:h-[420px] flex-shrink-0 overflow-hidden rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="object-cover w-full h-full rounded-tl-xl sm:rounded-bl-xl"
              />
            </div>

            {/* Content */}
            <div className="w-full sm:w-7/12 md:w-8/12 lg:w-7/12 flex flex-col gap-4 p-6 sm:p-6 md:p-8 lg:p-10 text-center sm:text-left items-center sm:items-start justify-center">
              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <span className="text-muted-foreground text-sm">
                  {caseStudy.date}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {caseStudy.title}
              </h3>
              <p className="text-muted-foreground dark:text-white/80 text-sm sm:text-base md:text-lg">
                {caseStudy.description}
              </p>
              <a
                href={caseStudy.link}
                className="link_button_outline mt-2"
              >
                View
              </a>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          aria-label="Previous Slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card card-shadow hover:bg-muted transition dark:bg-white dark:text-black"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"></path>
          </svg>
        </button>
        <button
          aria-label="Next Slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card card-shadow hover:bg-muted transition dark:bg-white dark:text-black"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
