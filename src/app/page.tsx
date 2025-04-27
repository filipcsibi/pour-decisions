import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-12 text-center">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider uppercase">
            <span className="block gradient-text">Pour Decisions</span>
            <span className="block text-white text-3xl sm:text-4xl mt-3">
              The Ultimate Drinking Game App
            </span>
          </h1>
          <p className="text-xl text-white opacity-80 max-w-2xl mx-auto">
            Spice up your pre-drinks and parties with the most entertaining
            drinking game app. Fun challenges, daring questions, and
            unforgettable moments await.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://apps.apple.com/app/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E94560] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.pourdecisions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#533483] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="bg-[#2b2b3e] rounded-lg p-6 border-2 border-[#533483] shadow-xl">
            <div className="h-12 w-12 rounded-full bg-[#E94560] bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-6 h-6 text-[#E94560]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Fun Challenges
            </h3>
            <p className="text-white opacity-70">
              Exciting and entertaining challenges that will keep the party
              going all night long.
            </p>
          </div>

          <div className="bg-[#2b2b3e] rounded-lg p-6 border-2 border-[#533483] shadow-xl">
            <div className="h-12 w-12 rounded-full bg-[#533483] bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-6 h-6 text-[#533483]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Truth or Dare</h3>
            <p className="text-white opacity-70">
              Classic Truth or Dare with a twist. Get ready for hilarious
              moments and memorable revelations.
            </p>
          </div>

          <div className="bg-[#2b2b3e] rounded-lg p-6 border-2 border-[#533483] shadow-xl">
            <div className="h-12 w-12 rounded-full bg-[#0EA5E9] bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-6 h-6 text-[#0EA5E9]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Perfect for Groups
            </h3>
            <p className="text-white opacity-70">
              Designed for groups of all sizes. The more friends, the more fun!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-8 pb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ready to make some Pour Decisions?
          </h2>
          <p className="text-white opacity-80 mb-8">
            Download the app now and transform your next party into an
            unforgettable experience.
          </p>
        </div>
      </div>
    </div>
  );
}
