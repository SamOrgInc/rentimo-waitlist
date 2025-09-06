import { CheckCircle } from "lucide-react";

interface WaitlistFormProps {
  isSubmitted: boolean;
  formData: {
    fullName: string;
    email: string;
    referralCode: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  submissionStatus: "idle" | "success" | "error";
}

export default function WaitlistForm({
  isSubmitted,
  formData,
  handleInputChange,
  handleSubmit,
  isLoading,
  submissionStatus,
}: WaitlistFormProps) {
  return (
    <section
      id="waitlist-form"
      className="py-20 bg-gradient-to-br from-[#FF480E]/5 to-[#1D295D]/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D295D] mb-6">
          Join the Waitlist
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Be among the first to access verified student housing when we launch
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF480E] focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF480E] focus:border-transparent"
              />
              {formData.referralCode && (
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-2">Referred by:</p>
                  <div className="bg-[#FF480E]/10 border border-[#FF480E]/20 rounded-lg px-3 py-2 text-sm text-[#FF480E] font-medium">
                    {formData.referralCode}
                  </div>
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full font-semibold py-4 rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
                  submissionStatus === "success"
                    ? "bg-green-500 text-white"
                    : submissionStatus === "error"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-[#FF480E] text-white hover:bg-[#FF480E]/90"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Joining...
                  </>
                ) : submissionStatus === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Success!
                  </>
                ) : submissionStatus === "error" ? (
                  "Try Again"
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </section>
  );
}
