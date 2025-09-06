import { Shield, CreditCard, Zap, CheckCircle, Eye, MapPin } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D295D] mb-6">
            A Better Way to Find Student Housing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rentimo eliminates the stress with verified listings and
            transparent pricing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#FF480E]/20 transition-colors">
            <div className="w-12 h-12 bg-[#FF480E]/10 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[#FF480E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D295D] mb-3">
              100% Verified
            </h3>
            <p className="text-gray-600 mb-4">
              Every hostel is physically inspected and verified by our team
              before listing
            </p>
            <div className="inline-flex items-center text-sm text-[#FF480E] font-medium">
              <CheckCircle className="w-4 h-4 mr-1" />
              No fake listings guaranteed
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#FF480E]/20 transition-colors">
            <div className="w-12 h-12 bg-[#1D295D]/10 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-[#1D295D]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D295D] mb-3">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 mb-4">
              See the exact price upfront - no hidden fees, no surprise
              charges
            </p>
            <div className="inline-flex items-center text-sm text-[#1D295D] font-medium">
              <Eye className="w-4 h-4 mr-1" />
              What you see is what you pay
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#FF480E]/20 transition-colors">
            <div className="w-12 h-12 bg-[#FF480E]/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#FF480E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1D295D] mb-3">
              Instant Booking
            </h3>
            <p className="text-gray-600 mb-4">
              Book your room instantly online - no lengthy negotiations or
              delays
            </p>
            <div className="inline-flex items-center text-sm text-[#FF480E] font-medium">
              <MapPin className="w-4 h-4 mr-1" />
              Move in within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
