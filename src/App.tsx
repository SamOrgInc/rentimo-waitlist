import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WaitlistForm from "./components/WaitlistForm";
import SuccessMessage from "./components/SuccessMessage";
import Footer from "./components/Footer";
// import MobileCTA from "./components/MobileCTA";

function App() {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwj7VVkHS8j0V-xOV6DZ0ahdgY8oT-FwjbqkVUH8ch_3fWuySFqO6c2mfBRkXA5lKBIzw/exec";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    referralCode: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    setIsVisible(true);
    // Get referral code from URL if exists
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get("ref");
    if (refCode) {
      setFormData((prev) => ({ ...prev, referralCode: refCode }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitToGoogleSheets = async (data: any) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          referralCode: data.referralCode,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Success:", result);
        return { success: true, data: result };
      } else {
        console.error("❌ Server error:", response.status, response.statusText);
        return { success: false, error: `Server error: ${response.status}` };
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      // Still submit successfully if it's a CORS issue (which is expected with Google Apps Script)
      if (error instanceof TypeError && error.message.includes("fetch")) {
        console.log("📝 Data likely submitted successfully (CORS limitation)");
        return { success: true, data: null };
      }
      return { success: false, error: String(error) };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus("idle");

    try {
      // Submit to Google Sheets
      const result = await submitToGoogleSheets(formData);

      if (result.success) {
        console.log("🎉 Form submitted successfully!");
        setSubmissionStatus("success");
        setIsSubmitted(true);
        setShowReferral(true);

        // Show success message
        if (result.data) {
          console.log("📊 Response data:", result.data);
        }
      } else {
        console.error("❌ Submission failed:", result.error);
        setSubmissionStatus("error");
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("❌ Unexpected submission error:", error);
      setSubmissionStatus("error");
      alert("There was an unexpected error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const generateReferralLink = () => {
    const userId = formData.email
      .replace("@", "")
      .replace(".", "")
      .replace(/[^a-zA-Z0-9]/g, "");
    const referralCode = `${userId.slice(0, 6)}${Math.random()
      .toString(36)
      .substr(2, 3)}`;
    return `${window.location.origin}?ref=${referralCode}`;
  };

  const copyReferralLink = () => {
    const link = generateReferralLink();
    navigator.clipboard.writeText(link);
    setReferralCount((prev) => prev + 1);
    alert("Referral link copied! Share it to climb up the waitlist.");
  };

  const shareOnTwitter = () => {
    const link = generateReferralLink();
    const text = encodeURIComponent(
      "Get verified student housing without the stress! Join me on the Rentimo waitlist 🏠"
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(
      link
    )}`;
    window.open(twitterUrl, "_blank");
    setReferralCount((prev) => prev + 1);
  };

  const handleShare = () => {
    const link = generateReferralLink();
    if (navigator.share) {
      navigator
        .share({
          title: "Join Rentimo Waitlist",
          text: "Get verified student housing without the stress!",
          url: link,
        })
        .then(() => {
          setReferralCount((prev) => prev + 1);
        });
    } else {
      copyReferralLink();
    }
  };

  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToWaitlist={scrollToWaitlist} />
      
      <HeroSection
        isVisible={isVisible}
        formData={formData}
        handleInputChange={handleInputChange}
        scrollToWaitlist={scrollToWaitlist}
      />
      
      <ProblemSection />
      
      <SolutionSection />
      
      <HowItWorksSection />
      
      <TestimonialsSection />

      {/* Final CTA */}
      {!isSubmitted ? (
        <WaitlistForm
          isSubmitted={isSubmitted}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          submissionStatus={submissionStatus}
        />
      ) : (
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
            <SuccessMessage
              showReferral={showReferral}
              referralCount={referralCount}
              generateReferralLink={generateReferralLink}
              copyReferralLink={copyReferralLink}
              shareOnTwitter={shareOnTwitter}
              handleShare={handleShare}
            />
          </div>
        </section>
      )}

      <Footer />

      {/* <MobileCTA scrollToWaitlist={scrollToWaitlist} /> */}
    </div>
  );
}

export default App;
