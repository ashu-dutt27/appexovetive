import React from "react";

export default function GlobalTransformation() {
  const stats = [
    {
      value: "30+",
      title: "Industries Mastered",
      description:
        "We deliver tailored digital engineering for 30+ industries, enhancing operational efficiency and unlocking new growth opportunities.",
    },
    {
      value: "1000+",
      title: "Tech Crusaders",
      description:
        "Our certified AI engineers, cloud architects, blockchain developers, and data scientists collaborate to deliver impactful, enterprise-grade solutions.",
        link: "/hire-blockchain-developers",
    },
    {
      value: "100+",
      title: "AI Models Deployed",
      description:
        "From predictive analytics to advanced generative AI, we develop intelligent models that drive measurable ROI and accelerate digital transformation.",
    },
    {
      value: "2500+",
      title: "Solutions Designed",
      description:
        "We design secure, scalable, and fully customized applications across AI, blockchain, cloud, big data, Web/Mobile apps, and gaming.",
    },
    {
      value: "300+",
      title: "Legacy Processes Transformed",
      description:
        "We transform outdated systems into modern, cloud-native, autonomous digital infrastructures that enhance agility and performance.",
    },
    {
      value: "05+",
      title: "Strategic Federal Partnerships",
      description:
        "Trusted by government entities and federal innovators for secure digital modernization, integrated AI solutions, and next-gen architectures.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-16 lg:pt-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:leading-snug font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 sm:mb-6">
          Global Transformation Through Intelligent Digital Innovation
        </h2>

        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
          Backed by 500+ certified experts, we build secure, scalable, and
          future-ready ecosystems that automate workflows, modernize legacy
          systems, and empower enterprises to operate with unmatched efficiency
          and innovation.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl flex flex-col items-center p-6 lg:p-8 text-center"
          >
            <div className="w-16 h-10 flex items-center justify-center rounded-sm bg-blue-600 text-white mb-2">
              {item.value}
            </div>
            <h3 className="font-medium text-lg md:text-xl mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">
              {item.description}
              {item.link && (
                <a
                  href={item.link}
                  className="ml-1 text-blue-600 hover:underline"
                >
                  Learn more
                </a>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-white shadow-lg rounded-xl max-w-7xl mx-auto p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-lg sm:text-2xl font-medium">
          <img
            src="https://img.nadcab.com/wp-content/uploads/2025/11/partner.svg"
            alt="Partner icon"
            width={50}
            height={50}
            className="object-contain"
          />
          <span>Let’s grow together — partner with us today!</span>
        </div>
        <a
          href="/partners"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Partner with us
        </a>
      </div>
    </section>
  );
}
