import { CheckCircle, Shield } from "lucide-react";

interface HeroSectionProps {
  isVisible: boolean;
  formData: {
    email: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  scrollToWaitlist: () => void;
}

export default function HeroSection({
  isVisible,
  formData,
  handleInputChange,
  scrollToWaitlist,
}: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#FF480E]/5 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 bg-[#FF480E]/10 border border-[#FF480E]/20 text-[#FF480E] rounded-full text-sm font-medium mb-8">
              🚀 Join Early Access
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1D295D] mb-6 leading-tight tracking-tight">
              Find Verified Hostels.
              <br />
              <span className="text-[#FF480E]">Skip The Stress.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              No agent wahala. From hustle to hostel, Unilag students dey use our platform to find verified, affordable hostels wey no get fake listing or hidden charges
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm p-1 w-full sm:w-auto max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  className="flex-1 px-3 py-2 border-0 rounded-lg focus:outline-none focus:ring-0 text-sm placeholder-gray-500"
                />
                <button
                  onClick={scrollToWaitlist}
                  className="bg-[#FF480E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FF480E]/90 transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-16">
              <div className="flex -space-x-1">
                {[
                  "https://images.unsplash.com/photo-1494790108755-2616b9e1b92c?w=24&h=24&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span>★★★★★ 4.9 rating based on 300+ Students</span>
            </div>

            {/* Hero Image with Mockup */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-[#FF480E]/10 via-[#1D295D]/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <img
                  src="/Mockup 3.png"
                  alt="Rentimo App Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-[#FF480E] text-white p-3 rounded-full shadow-xl">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#1D295D] text-white p-3 rounded-full shadow-xl">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
