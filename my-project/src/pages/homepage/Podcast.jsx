import React from "react";

const Podcast = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:order-1 order-2">
          <h4 className="text-blue-600 font-semibold tracking-widest mb-2">
            NADCAB PODCAST
          </h4>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"></div>

          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            Learn Blockchain Anytime <br /> &amp; Anywhere
          </h2>

          <p className="mb-8 text-lg">
            Nadcab Podcast helps you understand blockchain, crypto, Web3, AI, and
            modern technologies in the simplest way — online or offline.
          </p>

          {/* Feature 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-xl shadow flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="currentColor"
              >
                <path d="M16 12V6c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4zm-6 0V6c0-1.103.897-2 2-2a.89.89 0 0 0 .163-.015C13.188 4.06 14 4.935 14 6v6c0 1.103-.897 2-2 2s-2-.897-2-2z" />
                <path d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z" />
              </svg>
            </div>

            <div>
              <h4 className="text-xl font-medium">
                Learn Blockchain in the Easiest Way
              </h4>
              <p className="text-muted-foreground">
                Understand blockchain, crypto, Web3 &amp; AI using simple real-life
                examples.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 mb-10">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-xl shadow flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>

            <div>
              <h4 className="text-xl font-medium">
                Join as a Guest — Online or Offline
              </h4>
              <p className="text-muted-foreground">
                Record professionally from our studio or join us online as a guest.
              </p>
            </div>
          </div>

          <a href="/podcast" className="link_button_outline_blue">
            Start Listening
          </a>
        </div>

        {/* Right Image */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative cursor-pointer group max-w-[520px] w-full">
            <img
              src="/bs-img5.jpg"
              alt="Nadcab Podcast Video"
              className="rounded-3xl shadow-lg w-full h-auto"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-full shadow-lg group-hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
