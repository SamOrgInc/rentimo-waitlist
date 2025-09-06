import { ArrowRight } from "lucide-react";

interface MobileCTAProps {
  scrollToWaitlist: () => void;
}

export default function MobileCTA({ scrollToWaitlist }: MobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-lg">
      <button
        onClick={scrollToWaitlist}
        className="w-full bg-[#FF480E] text-white font-semibold py-3 rounded-lg flex items-center justify-center hover:bg-[#FF480E]/90 transition-colors"
      >
        Join Waitlist
        <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
}
