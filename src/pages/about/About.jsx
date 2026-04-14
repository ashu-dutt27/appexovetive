const About = () => {
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT IMAGE + TEXT */}
          <div className="col-span-5">
            <img
              src="https://img.nadcab.com/wp-content/uploads/2024/04/about-nadcab.webp"
              alt="About Apexovative"
              className="rounded-xl mb-5 w-full object-cover"
            />

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Get to Know Us
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automate and easily manage your customers' pre- and post-purchase
              experience.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-7">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              About Apexovative
            </h2>
            <p className="text-gray-600 mb-6">
              A leading blockchain company delivering innovative digital
              solutions worldwide.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">About Us</h4>
                <p className="text-sm text-gray-600">
                  Know who we are and what drives us.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Partner with Us</h4>
                <p className="text-sm text-gray-600">
                  Collaborate and grow with Apexovative.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Apexovative Team
                </h4>
                <p className="text-sm text-gray-600">
                  Meet the innovators behind our success.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Press Release</h4>
                <p className="text-sm text-gray-600">
                  Get the latest company updates.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Career</h4>
                <p className="text-sm text-gray-600">
                  Join our growing tech-driven team.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Contact Us</h4>
                <p className="text-sm text-gray-600">
                  We're here to connect with you.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
