import { X, DollarSign, Clock } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Student Housing Shouldn't Be This Hard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every semester, thousands of Unilag students face the same
            frustrating challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <X className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fake Listings
            </h3>
            <p className="text-gray-600 text-sm">
              Scammers posting fake photos and taking deposits for
              non-existent rooms
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Hidden Fees
            </h3>
            <p className="text-gray-600 text-sm">
              ₦5,000-₦10,000 inspection fees plus agent commissions that add
              up quickly
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Endless Searching
            </h3>
            <p className="text-gray-600 text-sm">
              Weeks of calling agents, viewing unsuitable rooms, and starting
              over
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
