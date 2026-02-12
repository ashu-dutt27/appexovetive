import React from "react";

const faqs = [
  {
    q: "What software services do you offer?",
    a: "We offer end-to-end software development, including custom applications, AI integration, cloud solutions, automation systems, and enterprise platforms tailored to meet diverse business needs efficiently."
  },
  {
    q: "What mobile app development services do you offer?",
    a: "We design, develop, and deploy high-performing mobile apps for iOS, Android, and cross-platform environments, ensuring seamless user experiences and business scalability."
  },
  {
    q: "Cost & timeline for blockchain development?",
    a: "The cost and timeline depend on project scope, complexity, and technology stack. Typically, blockchain solutions take 3–6 months and range from $30,000 to $150,000."
  },
  {
    q: "How do you ensure software security & quality?",
    a: "We follow strict security protocols, code reviews, QA testing, and compliance standards, ensuring reliable, high-quality, and secure software."
  },
  {
    q: "Do you offer app support & maintenance?",
    a: "Yes, we provide comprehensive post-launch support, updates, performance monitoring, and feature enhancements."
  },
  {
    q: "Why choose Nadcab Labs for development?",
    a: "Nadcab Labs combines deep technical expertise, agile methodologies, and innovative solutions to deliver scalable software."
  },
  {
    q: "How does Nadcab Labs ensure ethical AI use?",
    a: "We prioritize transparency, fairness, and accountability in AI systems, ensuring ethical data handling and bias-free algorithms."
  },
  {
    q: "What’s your app & software development process?",
    a: "Our process includes discovery, design, agile development, testing, deployment, and continuous improvement."
  },
  {
    q: "Do you handle integration & data migration?",
    a: "Yes, we offer seamless software integration and secure data migration services with minimal downtime."
  },
  {
    q: "Can AI be integrated into legacy systems?",
    a: "Yes, we specialize in embedding AI into existing software while maintaining system stability."
  }
];

const Faqs = () => {
  return (
    <section className="w-full lg:py-16 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center gradient-text font-medium text-3xl sm:text-4xl lg:mb-12 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="grid lg:gap-6 gap-4 grid-cols-1 sm:grid-cols-2">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="bg-card rounded-md card-shadow overflow-hidden group"
            >
              <summary className="accordion-trigger cursor-pointer list-none flex items-center justify-between px-6 py-4">
                <h3 className="font-normal text-base md:font-medium md:text-base">
                  {item.q}
                </h3>
                <span className="flex-shrink-0 w-9 h-9 bg-card card-shadow flex items-center justify-center">
                  <svg
                    viewBox="0 0 512 512"
                    className="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
                    fill="currentColor"
                  >
                    <path d="M128 192l128 128 128-128z" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
