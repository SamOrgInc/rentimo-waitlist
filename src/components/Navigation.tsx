interface NavigationProps {
  scrollToWaitlist: () => void;
}

export default function Navigation({ scrollToWaitlist }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/RentimoLogo.png"
              alt="Rentimo Logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-[#1D295D]">
              Rentimo
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <a
                href="#features"
                className="hover:text-[#FF480E] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#FF480E] transition-colors"
              >
                How it Works
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#FF480E] transition-colors"
              >
                Reviews
              </a>
            </div>
            <button
              onClick={scrollToWaitlist}
              className="bg-[#FF480E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FF480E]/90 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
