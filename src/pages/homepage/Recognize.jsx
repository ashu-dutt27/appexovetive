import React from "react";

export default function Recognize() {
  return (
    <>
      {/* Award Section */}
      <section className="sm:px-4">
        <div className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                    Award Winning
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">Recognized by TechBehemoths 2025</h2>
                  <p className="text-muted-foreground text-lg">
                    Apexovative has been honored as a winner in three prestigious categories at the TechBehemoths Global Excellence Awards 2025.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Global recognition in Berlin, Germany",
                    "Triple category winner",
                    "Verified and authentic certificate",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group transition-transform hover:scale-[1.02]">
                <div className="bg-white rounded-xl shadow-lg p-2 md:p-3 border">
                  <img
                    src="/certificate.webp"
                    alt="TechBehemoths Global Awards 2025 Certificate"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="lg:py-24 pt-16 px-4">
        <h2 className="text-center gradient-text text-2xl sm:text-3xl md:text-4xl font-medium mb-12">
          Strategic Partnerships to Unlock Greater Business Value
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {["AWS","Cloudinary","GCP","Azure","Digital Ocean","Cloudflare","Akamai","Alchemy","Infura","Vercel"].map((name) => (
            <div key={name} className="flex flex-col items-center text-center p-4 lg:p-6 lg:bg-card lg:rounded-xl lg:card-shadow">
              <span className="font-medium text-sm lg:text-lg">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Leading the Next Wave of Digital Transformation</h2>
            <p className="text-xl text-gray-600 mb-8">Schedule a free consultation and discover how our specialists can accelerate your vision.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2 text-center">Start Your Project</h3>
            <p className="text-blue-100 text-center mb-6">Get a free consultation and project estimate</p>
            <form className="space-y-4">
              <input className="w-full px-4 py-3 rounded-xl bg-white/10" placeholder="Full Name" />
              <input className="w-full px-4 py-3 rounded-xl bg-white/10" placeholder="Email" />
              <input className="w-full px-4 py-3 rounded-xl bg-white/10" placeholder="Phone" />
              <button className="w-full py-3 bg-white text-blue-700 rounded-xl font-semibold">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
