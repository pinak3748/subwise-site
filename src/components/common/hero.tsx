
export const Hero = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-36">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left">
              {/* Logo */}
              <div className="mb-4 flex justify-center lg:justify-start">
                <img src="/logo.png" alt="Subwise Logo" className="size-24" />
              </div>

              <h1 className="text-5xl leading-tight font-bold text-gray-900">
                See Every Dollar You Spend on Subscriptions
                </h1>
                <p className="text-2xl font-medium text-gray-600 sm:text-2xl">
                  Save Money on Subscriptions
                </p>

              {/* Promotional Text */}
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
                Take control of your subscription spending! Track Netflix, Spotify, and all your
                recurring payments in one beautiful dashboard. See exactly where your money goes.
              </p>

              {/* Why Users Love Section */}
              {/* <div className="space-y-3 pt-4">
                <p className="mb-4 text-sm font-semibold text-gray-900">Why users love Subwise</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-sm text-gray-600">
                      Intuitive interface with minimal learning curve
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-sm text-gray-600">
                      Seamless cross-device syncing and offline support
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-sm text-gray-600">
                      Advanced organizational tools with zero complexity
                    </p>
                  </div>
                </div>
              </div> */}

              {/* App Store Buttons */}
              <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row lg:justify-start">
                <button className="inline-flex h-14 items-center justify-center rounded-lg bg-foreground px-6 text-white shadow-md transition-colors hover:bg-gray-800 hover:shadow-lg">
                  <svg className="mr-3 size-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs leading-tight">Download on the</div>
                    <div className="text-sm leading-tight font-semibold">App Store</div>
                  </div>
                </button>
                {/* <button className="inline-flex h-14 items-center justify-center rounded-lg bg-black px-6 text-white shadow-md transition-colors hover:bg-gray-800 hover:shadow-lg">
                  <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs leading-tight">GET IT ON</div>
                    <div className="text-sm leading-tight font-semibold">Google Play</div>
                  </div>
                </button> */}
              </div>
            </div>

            {/* Right Content - Dashboard Image */}
            <div className="relative flex items-start justify-start">
              <div className="relative w-full">
                <img
                  src="/dashboard.png"
                  alt="Subwise Dashboard"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />
      </section>
    </div>
  );
};
