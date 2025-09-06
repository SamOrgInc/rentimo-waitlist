import { CheckCircle, Gift, Copy, Share2, Twitter } from "lucide-react";

interface SuccessMessageProps {
  showReferral: boolean;
  referralCount: number;
  generateReferralLink: () => string;
  copyReferralLink: () => void;
  shareOnTwitter: () => void;
  handleShare: () => void;
}

export default function SuccessMessage({
  showReferral,
  referralCount,
  generateReferralLink,
  copyReferralLink,
  shareOnTwitter,
  handleShare,
}: SuccessMessageProps) {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white border border-[#FF480E]/20 rounded-xl p-8 mb-6">
        <CheckCircle className="w-16 h-16 text-[#FF480E] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#1D295D] mb-2">
          Welcome to Rentimo!
        </h3>
        <p className="text-gray-600 mb-6">
          You're now on the waitlist. We'll notify you when we launch.
        </p>

        {/* Referral Section */}
        {showReferral && (
          <div className="border-t border-gray-200 pt-6">
            <div className="bg-gradient-to-r from-[#FF480E]/10 to-[#1D295D]/10 rounded-lg p-6 text-center">
              <Gift className="w-12 h-12 text-[#FF480E] mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-[#1D295D] mb-2">
                Want to move up the waitlist?
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Invite your friends to join and get early access!
              </p>

              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="text-sm text-[#FF480E] font-medium">
                  Shares made: {referralCount} • Refer 5 friends for a
                  big jump: {referralCount}/5
                </div>
              </div>

              <div className="flex items-center bg-gray-50 rounded-lg p-2 mb-4">
                <input
                  type="text"
                  value={generateReferralLink()}
                  readOnly
                  className="flex-1 bg-transparent text-xs text-gray-600 outline-none"
                />
                <button
                  onClick={copyReferralLink}
                  className="bg-[#FF480E] text-white px-3 py-1 rounded text-xs hover:bg-[#FF480E]/90 transition-colors flex items-center"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </button>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={shareOnTwitter}
                  className="flex-1 bg-[#1DA1F2] text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center hover:bg-[#1DA1F2]/90 transition-colors"
                >
                  <Twitter className="w-4 h-4 mr-1" />
                  Share on Twitter
                </button>
                <button
                  onClick={handleShare}
                  className="flex-1 bg-[#1D295D] text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center hover:bg-[#1D295D]/90 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                The more you share, the higher you'll climb up the list.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
