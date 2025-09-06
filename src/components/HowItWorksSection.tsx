export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D295D] mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to find your perfect student accommodation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF480E] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1D295D] mb-3">
              Browse Verified Listings
            </h3>
            <p className="text-gray-600">
              Search through our curated collection of verified hostels near
              Unilag with real photos and transparent pricing
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#1D295D] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1D295D] mb-3">
              Compare & Choose
            </h3>
            <p className="text-gray-600">
              Compare amenities, prices, and locations. Read reviews from
              other students and select your preferred option
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF480E] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1D295D] mb-3">
              Book Instantly
            </h3>
            <p className="text-gray-600">
              Complete your booking online with secure payment. Get instant
              confirmation and move in hassle-free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
